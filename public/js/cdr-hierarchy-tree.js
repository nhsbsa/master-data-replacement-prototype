/* jshint esversion: 9 */
import 'jquery.fancytree/dist/modules/jquery.fancytree.filter';
import {
    createTree
} from 'jquery.fancytree';
import {
    Config
} from "../../config";

const context = Config.context;
const ref = document.getElementById('breadcrumb-ref').getAttribute("data-ref");
const vmpIdAttr = document.querySelector('[data-vmp-id]');
let vmpId = '';


function SetupTree() {


    if (vmpIdAttr !== null) {
        vmpId = vmpIdAttr.getAttribute('data-vmp-id');
        fetch(`${context}/hierarchy/vmp/${vmpId}`)
            .then(response => response.json())
            .then(initialiseTree)
            .catch(e => console.log('vmp e', e));
    }
}

function initialiseTree(response) {

    let root = null;
    if (response.vtmId === null || response.vtmId === 0) {
        root = {
            title: "No associated VTM",
            key: `vtm`,
            type: 'vtm',
            folder: true,
            children: [],
            expanded: true
        };
        appendResultsToRoot(root, response);
        return;
    }
    fetch(`${context}/hierarchy/vtm/${response.vtmId}`)
        .then(vtmResponse => vtmResponse.json())
        .then((vtmResponse) => {
            let vtmName = "No VTM name found";
            vtmResponse.names.current.forEach((currentName) => {
                if (currentName.nameType === "NAME") {
                    vtmName = currentName.value;
                }
            });
            root = {
                title: `${vtmName}`,
                key: `vtm`,
                type: 'vtm',
                id: `${response.vtmId}`,
                invalid: `${vtmResponse.invalid}`,
                startDate: `${vtmResponse.startDate}`,
                folder: true,
                children: [],
                expanded: true
            };
            appendResultsToRoot(root, response)
        })
        .catch(e => console.log(e));
}

function appendResultsToRoot(root, response) {
    let vmp = null
    // set vmp data based on whether there is a ppaCode present
    vmp = {
        title: `${response.genericNames.current[0].value}`,
        key: `vmp-${response.id}`,
        id: `${response.id}`,
        startDate: `${response.startDate}`,
        invalid: response.invalid,
        type: 'vmp',
        folder: true,
        children: [],
        expanded: true
    };

    // loop over vmpp data
    response.genericProductPacks.forEach(pack => {

        // identify vmpp drug category to show after title
        let drugCat = '';
        if (pack.drugTariffPaymentCategory != null) {
            const drugArray = pack.drugTariffPaymentCategory.split('_');
            let drugNumber = drugArray[1];
            let comboDrugNumber = drugArray[3];
            let lastLetter = drugArray.slice(-1)[0];

            if (drugNumber === "IXA") {
                drugCat = "(9A)"
            } else if (drugNumber === "IXB" && !comboDrugNumber) {
                drugCat = "(9B)"
            } else if (drugNumber === "IXB" && comboDrugNumber) {
                drugCat = "(9B/9C)"
            } else if (drugNumber === "IXC" && !comboDrugNumber) {
                drugCat = "(9C)"
            } else if (drugNumber === "IXR") {
                drugCat = "(9R)"
            } else if (drugNumber === "VIIIA") {
                drugCat = `(8A Cat ${lastLetter})`
            } else if (drugNumber === "VIIIB") {
                drugCat = "(DTSO)"
            } else if (drugNumber === "VIIIC") {
                drugCat = "(8C)"
            } else if (drugNumber === "VIIID") {
                drugCat = "(8D)"
            }
        }

        vmp.children.push({
            title: `${pack.quantity} ${pack.quantityUnitOfMeasure.toLowerCase()}`,
            cat: `${drugCat}`,
            drugTariffPrice: pack.drugTariffPrice,
            id: pack.id,
            invalid: `${pack.invalid}`,
            startDate: `${pack.startDate}`,
            quantity: `${pack.quantity}`,
            type: 'vmpp',
            children: pack.componentPacks ? pack.componentPacks.current : '',
            key: `vmpp-${pack.id}`,
        });
    });

    // sort order of combination packs
    for (const element of vmp.children) {
        if (element.children) {
            element.children.sort(function(a, b) {
                return a.quantity - b.quantity
            });
        }
    }

    // general sort order
    vmp.children.sort(function(a, b) {
        return a.quantity - b.quantity
    });

    vmp.children.push({
        title: "AMPs",
        key: 'amp',
        type: 'amp-parent',
        folder: true,
        lazy: true
    });

    root.children.push(vmp);

    createTree('#drug-hierarchy-tree', {
        extensions: ['filter', 'tabable'],
        toggleEffect: false,
        autoScroll: false,
        activeVisible: false,
        renderNode: function(event, data) {

            var node = data.node;
            var today = new Date(Date.now());
            var refactorToday = today.toISOString();

            if (node.data) {
                var $span = $(node.span);
                var $ul = $(node.parent.ul);
                setTimeout(function() {
                    $span.find("span.fancytree-expander").attr("aria-label", `${(node.type === "vtm" || node.type === "vmp" || node.type === "amp-parent" || node.type === "amp") ? 'Expand button at ' + node.type.toUpperCase() + ' level' : ''}`)
                    $span.find("span.fancytree-expander").removeAttr(`${(node.type === "vmpp" || node.type === "ampp") ? "aria-label" : ''}`)
                    $span.find("span.fancytree-expander").attr("id", `${node.type && node.type != "amp-parent" ? node.type + '-' + node.data.id : !node.type ? node.parent.type + '-' + node.data.id : 'amp-parent'}`)
                    $ul.attr("aria-live", "polite");
                    $ul.attr("aria-relevant", "additions removals");
                }, 20);
                //        general styling for each title
                $span.find("span.fancytree-title").text(node.title).css({
                    "white-space": "normal",
                    "overflow": "hidden",
                    "outline": "none",
                });

                if (node.type === "vtm") {
                    var vtmHref = `${context}/${node.type}/${node.data.id}?ref=${ref}`;

                    node.data.href = vtmHref;
                    $span.css({
                        "background-color": "#dee0e2",
                        "border": "1px solid #768692",
                    });
                    $span.find("span.fancytree-title").css({
                        "background-color": "#dee0e2",
                        "color": "#212b32",
                        "cursor": "text",
                    })

                    if (node.title != 'No associated VTM') {
                        $span.find("span.fancytree-title").contents().wrap('<a id="link--tree-vtm-level-' + node.data.id + '" class="tree-link" role="link" href="' + vtmHref + '"></a>')

                    }
                    if (node.data.invalid === "true") {
                        let line = '';
                        $span.find("a.tree-link").before('<svg class="nhsuk-u-margin-right-1" style="background-image: url(../images/icons/icon-cross-square.svg); background-repeat: no-repeat; width: 25px; height: 25px; vertical-align: text-bottom;">' + line + '</svg>\n');
                    }
                    if (node.data.startDate > refactorToday) {
                        $span.css({
                            "background-color": "#DEEDE8",
                            "border": "1px solid #89BDA1",
                        });
                        $span.find("span.fancytree-title").css({
                            "white-space": "normal",
                            "overflow": "hidden",
                            "outline": "none",
                            "background-color": "#DEEDE8",
                            "color": "#005eb8"
                        });
                        var line = 'F';
                        $span.find("a.tree-link").before('<span class="nhsuk-u-visually-hidden">Future dated</span><strong class="nhsuk-tag nhsuk-tag--purple nhsuk-u-margin-right-2" style="vertical-align: text-bottom; padding: 2px 5px;">' + line + '</strong>');
                    }
                }

                if (node.type == "vmp") {

                    // getting id from url in order to match up with vmp id - then displaying 'viewing' tag on amp on tree
                    var vmpUrl = window.location.href.split('?');
                    var vmpUrlArray = vmpUrl[0].split('/');

                    if (vmpUrlArray.length > 0) {
                        var getVmpId = vmpUrlArray[vmpUrlArray.length - 1];
                        var getVmpIndicator = vmpUrlArray[vmpUrlArray.length - 2];
                    }

                    var vmpHref = `${context}/${node.type}/${node.data.id}?ref=${ref}`;

                    node.data.href = vmpHref;
                    $span.css({
                        "background-color": "#dee0e2",
                        "border": "1px solid #768692",
                    });
                    $span.find("span.fancytree-title").css({
                        "background-color": "#dee0e2",
                        "color": "#005EB8",
                    })
                    $span.find("span.fancytree-title").contents().wrap('<a id="link--tree-vmp-level-' + node.data.id + '" class="tree-link" href="' + vmpHref + '"></a>')

                    //      red cross icon for vmp + invalid
                    if (node.data.invalid === true) {
                        let line = '';
                        $span.find("a.tree-link").before('<svg class="nhsuk-u-margin-right-1" style="background-image: url(../images/icons/icon-cross-square.svg); background-repeat: no-repeat; width: 25px; height: 25px; vertical-align: text-bottom;">' + line + '</svg>\n');
                    }

                    if (node.data.startDate > refactorToday) {
                        $span.css({
                            "background-color": "#D7EAE0",
                            "border": "1px solid #69AB8A",
                        });
                        $span.find("span.fancytree-title").css({
                            "white-space": "normal",
                            "overflow": "hidden",
                            "outline": "none",
                            "background-color": "#D7EAE0",
                            "color": "#005eb8"
                        });
                        let line = 'F';
                        $span.find("a.tree-link").before('<span class="nhsuk-u-visually-hidden">Future dated</span><strong class="nhsuk-tag nhsuk-tag--purple nhsuk-u-margin-right-2" style="vertical-align: text-bottom; padding: 2px 5px;">' + line + '</strong>');
                    }

                    if (String(node.data.id) === getVmpId && getVmpIndicator === "vmp") {
                        let line = 'Viewing';
                        $span.find("a.tree-link").after('<span class="nhsuk-u-visually-hidden" style="color: #0b0c0c">AMP currently viewing</span><strong class="nhsuk-tag nhsuk-u-margin-1" style="vertical-align: text-bottom; padding: 4px; float: right">' + line + '</strong>');
                    }

                }


                // href for vmpp level
                if (node.type === "vmpp") {

                    // getting id from url in order to match up with vmp id - then displaying 'viewing' tag on amp on tree
                    var vmppUrl = window.location.href.split('?');
                    var vmppUrlArray = vmppUrl[0].split('/');

                    if (vmppUrlArray.length > 0) {
                        var getVmppId = vmppUrlArray[vmppUrlArray.length - 1];
                        var getVmppIndicator = vmppUrlArray[vmppUrlArray.length - 2];
                    }


                    var vmppHref = `${context}/${node.type}/${node.data.id}?ref=${ref}`;

                    node.data.href = vmppHref;
                    $span.find("span.fancytree-title").text(node.title).css({
                        "white-space": "normal",
                        "overflow": "hidden",
                        "outline": "none",
                    });
                    $span.find("span.fancytree-title").contents().wrap('<a id="link--tree-vmpp-level-' + node.data.id + '" class="tree-link" href="' + vmppHref + '" aria-label="link to view ' + node.title + '" "></a>')
                    $span.find("span.fancytree-title").append(` ${node.data.cat ? node.data.cat : ""}`);


                    if (node.data.startDate > refactorToday) {
                        $span.css({
                            "background-color": "#D7EAE0",
                            "border": "1px solid #69AB8A",
                        });
                        $span.find("span.fancytree-title").css({
                            "white-space": "normal",
                            "overflow": "hidden",
                            "outline": "none",
                            "background-color": "#D7EAE0",
                        });
                        let line = 'F';
                        $span.find("a.tree-link").before('<span class="nhsuk-u-visually-hidden">Future dated</span><strong class="nhsuk-tag nhsuk-tag--purple nhsuk-u-margin-right-2" style="vertical-align: text-bottom; padding: 1px 6px;">' + line + '</strong>');
                    }
                    if (String(node.data.id) === getVmppId && getVmppIndicator === "vmpp") {
                        let line = 'Viewing';
                        $span.find("a.tree-link").after('<span class="nhsuk-u-visually-hidden" style="color: #0b0c0c">AMP currently viewing</span><strong class="nhsuk-tag nhsuk-u-margin-right-1 nhsuk-u-margin-left-4" style="vertical-align: text-bottom; padding: 3px; float: right">' + line + '</strong>');
                    }

                    // vmpp does not show discontinued, only invalid or future
                    if (node.children) {
                        if (node.data.startDate > refactorToday) {
                            $span.css({
                                "background-color": "#D7EAE0",
                                "border": "1px solid #69AB8A",
                            });
                        } else {
                            $span.css({
                                "background-color": "#ffffe6",
                                "border": "1px solid #c2c2d6",
                            });
                        }
                        $span.find("span.fancytree-expander").css({
                            "vertical-align": "baseline",
                            "margin": "8px 2px 0 2px",
                        });
                        $span.find("span.fancytree-title").css({
                            "margin": "2px 0px 5px 0",
                            "padding": "0.125em;"
                        });

                        if (node.data.invalid === "true") {
                            let line = '';
                            $span.find("a.tree-link").before('<svg class="nhsuk-u-margin-right-1" style="background-image: url(../images/icons/icon-cross-square-pp.svg); background-repeat: no-repeat; width: 22px; height: 21px; vertical-align: text-bottom;">' + line + '</svg>\n');
                        }

                    }

                    if (node.data.invalid === "true" && !node.children) {
                        let line = '';
                        $span.find("span.fancytree-expander").css({
                            "background-image": "url(../images/icons/icon-cross-square-pp.svg)",
                            "background-repeat": "no-repeat",
                            "width": "22px",
                            "height": "21px",
                        });
                    }
                }


                if (!node.type) {

                    if (node.parent.type === 'vmpp') {
                        let drugCat = '';

                        if (node.data.drugTariffPaymentCategory != null) {
                            const drugArray = pack.drugTariffPaymentCategory.split('_');
                            let drugNumber = drugArray[1];
                            let comboDrugNumber = drugArray[3];
                            let lastLetter = drugArray.slice(-1)[0];

                            if (drugNumber === "IXA") {
                                drugCat = "(9A)"
                            } else if (drugNumber === "IXB" && !comboDrugNumber) {
                                drugCat = "(9B)"
                            } else if (drugNumber === "IXB" && comboDrugNumber) {
                                drugCat = "(9B/9C)"
                            } else if (drugNumber === "IXC") {
                                drugCat = "(9C)"
                            } else if (drugNumber === "IXR") {
                                drugCat = "(9R)"
                            } else if (drugNumber === "VIIIA") {
                                drugCat = `(8A Cat ${lastLetter})`
                            } else if (drugNumber === "VIIIB") {
                                drugCat = "(DTSO)"
                            } else if (drugNumber === "VIIIC") {
                                drugCat = "(8C)"
                            } else if (drugNumber === "VIIID") {
                                drugCat = "(8D)"
                            }
                        }

                        $span.find("span.fancytree-title").text(`${node.data.quantity} ${node.data.quantityUnitOfMeasure.toLowerCase()}`);
                        var vmppHref = `${context}/vmpp/${node.data.id}?ref=${ref}`;

                        $span.find("span.fancytree-title").contents().wrap('<a id="link--tree-vmpp-level-' + node.data.id + '" class="tree-link" href="' + vmppHref + '"></a>')
                        $span.find("span.fancytree-title").append(`${drugCat ? '(' + drugCat + ')' : ''}`);

                    } else if (node.parent.type === 'ampp') {
                        $span.find("span.fancytree-title").text(`${node.data.quantity} ${node.data.quantityUnitOfMeasure.toLowerCase()}`);
                        var amppHref = `${context}/ampp/${node.data.id}?ref=${ref}`;

                        $span.find("span.fancytree-title").contents().wrap('<a id="link--tree-ampp-level-' + node.data.id + '" class="tree-link" href="' + amppHref + '"></a>')

                    }

                    if (node.data.startDate > refactorToday) {
                        $span.css({
                            "background-color": "#D7EAE0",
                            "border": "1px solid #69AB8A",
                        });
                        $span.find("span.fancytree-title").css({
                            "white-space": "normal",
                            "overflow": "hidden",
                            "outline": "none",
                            "background-color": "#D7EAE0",
                        });
                        let line = 'F';
                        $span.find("a.tree-link").before('<span class="nhsuk-u-visually-hidden">Future dated</span><strong class="nhsuk-tag nhsuk-tag--purple nhsuk-u-margin-right-2" style="vertical-align: text-bottom; padding: 1px 6px;">' + line + '</strong>');
                    }
                    // vmpp does not show discontinued, only invalid or future
                    if (node.data.invalid === true) {
                        let line = '';
                        $span.find("span.fancytree-expander").css({
                            "background-image": "url(../images/icons/icon-cross-square-pp.svg)",
                            "background-repeat": "no-repeat",
                            "width": "22px",
                            "height": "22px",
                        });
                    }
                    if (node.data.invalid === false && node.data.discontinued === true) {
                        $span.find("span.fancytree-expander").css({
                            "background-image": "url(../images/icons/warning-pp.svg)",
                            "width": "20px",
                            "height": "19px",
                        });
                    }
                }

                if (node.type === "amp-parent") {

                    $span.css({
                        "background-color": "#dee0e2",
                        "border": "1px solid #768692",
                    });
                    $span.find("span.fancytree-title").css({
                        "background-color": "#dee0e2",
                        "color": "#212b32",
                        "cursor": "text",
                    });
                    $span.find("span.fancytree-title").text(`${node.children !== null ? 'AMPs ' +  (node.children.length === 101 ? '(1-' + (node.children.length -1) + '/' + (node.children[0].data.totalElements) : '(' + node.children[0].data.totalElements) + ')' : 'AMPs'}`)
                }



                // href for amp level
                if (node.type === "amp") {
                    // getting id from url in order to match up with amp id - then displaying 'viewing' tag on amp on tree
                    var ampUrl = window.location.href.split('?');
                    var ampUrlArray = ampUrl[0].split('/');

                    if (ampUrlArray.length > 0) {
                        var getAmpId = ampUrlArray[ampUrlArray.length - 1];
                        var getAmpIndicator = ampUrlArray[ampUrlArray.length - 2];
                    }


                    var ampHref = `${context}/${node.type}/${node.data.id}?ref=${ref}`;

                    node.data.href = ampHref;
                    $span.css({
                        "background-color": "#F5FCFF",
                        "border": "1px solid #A4B0B2",
                    });
                    $span.find("span.fancytree-title").text(node.title).css({
                        "white-space": "normal",
                        "overflow": "hidden",
                        "outline": "none",
                        "background-color": "#F5FCFF",
                    });
                    $span.find("span.fancytree-title").contents().wrap('<a id="link--tree-amp-level-' + node.data.id + '" class="tree-link" href="' + ampHref + '"></a>')

                    if (node.data.invalid === true) {
                        let line = '';
                        $span.find("a.tree-link").before('<svg class="nhsuk-u-margin-right-1" style="background-image: url(../images/icons/icon-cross-square.svg); background-repeat: no-repeat; width: 25px; height: 25px; vertical-align: text-bottom;">' + line + '</svg>\n');
                    }
                    if (node.data.discontinued === "NOT_AVAILABLE" && node.data.invalid === false) {
                        let line = '';
                        $span.find("a.tree-link").before('<svg style="background-image: url(../images/icons/warning.svg); background-repeat: no-repeat; width: 22px; height: 22px; vertical-align: text-bottom;">' + line + '</svg>\n');
                    }
                    if (node.data.futureDated === true) {
                        let line = 'F';
                        $span.find("a.tree-link").before('<span class="nhsuk-u-visually-hidden">Future dated</span><strong class="nhsuk-tag nhsuk-tag--purple nhsuk-u-margin-right-2" style="vertical-align: text-bottom; padding: 2px 5px;">' + line + '</strong>');
                        $span.find("span.fancytree-title").css({
                            "background-color": "#D7EAE0",
                        });
                        $span.css({
                            "background-color": "#D7EAE0",
                            "border": "1px solid #89BDA1",
                        });
                    }
                    if (node.data.parallelImportProduct === true) {
                        let line = 'P';
                        $span.find("a.tree-link").before('<span class="nhsuk-u-visually-hidden" style="color: #0b0c0c">Parallel Import indicator</span><strong class="nhsuk-tag nhsuk-tag--white nhsuk-u-margin-right-1" style="vertical-align: text-bottom; padding: 2px 5px;">' + line + '</strong>');
                    }
                    if (node.data.supplierTypeIndicator === "WHOLESALER") {
                        let line = 'W';
                        $span.find("a.tree-link").before('<span class="nhsuk-u-visually-hidden" style="color: #0b0c0c">Wholesale indicator</span><strong class="nhsuk-tag nhsuk-u-margin-right-1" style="vertical-align: text-bottom; padding: 2px 4px; background-color: #606E80; border: 1px solid #212b32">' + line + '</strong>');
                    }
                    if (String(node.data.id) === getAmpId && getAmpIndicator === "amp") {
                        let line = 'Viewing';
                        $span.find("a.tree-link").after('<span class="nhsuk-u-visually-hidden" style="color: #0b0c0c">AMP currently viewing</span><strong class="nhsuk-tag nhsuk-u-margin-1" style="vertical-align: text-bottom; padding: 4px; float: right">' + line + '</strong>');
                    }
                }
                if (node.type === "more-amp" && node.parent.type != "amp-parent") {

                    $ul.css({
                        "padding": "0px"
                    });
                    $span.css({
                        "background-color": "#dee0e2",
                        "border": "1px solid #768692",
                    });
                    $span.find("span.fancytree-title").css({
                        "width": "92%",
                        "padding": "0.125em",
                        "font-size": "initial",
                    });
                    $span.css({
                        "padding": "0.125em",
                    })
                } else if (node.type === "more-amp" && node.parent.type === "amp-parent") {
                    $span.css({
                        "background-color": "#dee0e2",
                        "border": "1px solid #768692",
                    });
                    $span.find("span.fancytree-title").css({
                        "width": "92%",
                        "padding": "0.125em",
                        "font-size": "initial",
                    })
                    $span.css({
                        "padding": "0.125em",
                    })
                }


                if (node.parent.type === "more-amp" && node.type === 'amp') {
                    $ul.css({
                        "padding": "0px"
                    });
                }

                // href for ampp level
                if (node.type === "ampp") {

                    // getting id from url in order to match up with vmp id - then displaying 'viewing' tag on amp on tree
                    var amppUrl = window.location.href.split('?');
                    var amppUrlArray = amppUrl[0].split('/');

                    if (amppUrlArray.length > 0) {
                        var getAmppId = amppUrlArray[amppUrlArray.length - 1];
                        var getAmppIndicator = amppUrlArray[amppUrlArray.length - 2];
                    }

                    var amppHref = `${context}/${node.type}/${node.data.id}?ref=${ref}`;

                    node.data.href = amppHref;
                    $span.find("span.fancytree-title").text(node.title).css({
                        "white-space": "normal",
                        "overflow": "hidden",
                        "overflow": "hidden",
                        "outline": "none",
                    });

                    let amppDrugCat = "";

                    if (node.data.pitId == 5) {
                        if (node.data.drugTariffPaymentCategory != null && node.data.indicativePrice > 0) {
                            let amppDTArray = node.data.drugTariffPaymentCategory.split('_');
                            let amppDTNumber = amppDTArray[1];
                            let comboAmppDrugNumber = amppDTArray[3];
                            let lastLetter = amppDTArray.slice(-1)[0];

                            if (amppDTNumber === "IXA") {
                                amppDrugCat = "(9A)"
                            } else if (amppDTNumber === "IXB" && !comboAmppDrugNumber) {
                                amppDrugCat = "(9B)"
                            } else if (amppDTNumber === "IXB" && comboAmppDrugNumber) {
                                amppDrugCat = "(9B/9C)"
                            } else if (amppDTNumber === "IXC" && !comboAmppDrugNumber) {
                                amppDrugCat = "(9C)"
                            } else if (amppDTNumber === "IXR") {
                                amppDrugCat = "(9R)"
                            }
                        }
                    }

                    $span.find("span.fancytree-title").contents().wrap('<a id="link--tree-ampp-level-' + node.data.id + '" class="tree-link" href="' + amppHref + '"></a>')
                    $span.find("span.fancytree-title").append(`${amppDrugCat ? ' ' + amppDrugCat : ''}`);

                    if (String(node.data.id) === getAmppId && getAmppIndicator === "ampp") {
                        let line = 'Viewing';
                        $span.find("a.tree-link").after('<span class="nhsuk-u-visually-hidden" style="color: #0b0c0c">AMP currently viewing</span><strong class="nhsuk-tag nhsuk-u-margin-right-1 nhsuk-u-margin-left-4" style="vertical-align: text-bottom; padding: 3px; float: right">' + line + '</strong>');
                    }

                    if (node.children) {
                        if (node.data.startDate > refactorToday) {
                            $span.css({
                                "background-color": "#D7EAE0",
                                "border": "1px solid #69AB8A",
                            });
                        } else {
                            $span.css({
                                "background-color": "#ffffe6",
                                "border": "1px solid #c2c2d6",
                            });
                        }
                        $span.find("span.fancytree-expander").css({
                            "vertical-align": "text-bottom",
                            "margin": "8px 2px 0 2px",
                        });
                        $span.find("span.fancytree-title").css({
                            "margin": "4px 0px",
                            "padding": "0.125em;"
                        });
                        if (node.data.invalid === true) {
                            let line = '';
                            $span.find("a.tree-link").before('<svg class="nhsuk-u-margin-right-1" style="background-image: url(../images/icons/icon-cross-square-pp.svg); background-repeat: no-repeat; width: 22px; height: 21px; vertical-align: text-bottom;">' + line + '</svg>\n');
                        }
                        if (node.data.discontinued === true && node.data.invalid === false) {
                            $span.find("a.tree-link").before('<svg class="nhsuk-u-margin-right-1" style="background-image: url(../images/icons/warning-pp.svg); background-repeat: no-repeat; width: 22px; height: 22px; vertical-align: text-bottom;">' + line + '</svg>\n');
                        }

                    }

                    if (node.data.invalid === true && !node.children) {
                        let line = '';
                        $span.find("span.fancytree-expander").css({
                            "background-image": "url(../images/icons/icon-cross-square-pp.svg)",
                            "background-repeat": "no-repeat",
                            "width": "22px",
                            "height": "21px",
                        });
                    }

                    if (!node.children && (node.data.discontinued === true && node.data.invalid === false)) {
                        $span.find("span.fancytree-expander").css({
                            "background-image": "url(../images/icons/warning-pp.svg)",
                            "width": "20px",
                            "height": "19px",
                        });
                    }

                    if (node.data.startDate > refactorToday) {
                        $span.css({
                            "background-color": "#D7EAE0",
                            "border": "1px solid #A0CAB3",
                        });
                        $span.find("span.fancytree-title").css({
                            "white-space": "normal",
                            "overflow": "hidden",
                            "outline": "none",
                            "background-color": "#D7EAE0",
                            "color": "#005eb8"
                        });
                        let line = 'F';
                        $span.find("a.tree-link").before('<span class="nhsuk-u-visually-hidden">Future dated</span><strong class="nhsuk-tag nhsuk-tag--purple nhsuk-u-margin-right-2" style="vertical-align: text-bottom; padding: 1px 6px;">' + line + '</strong>');
                    }

                }

            }

        },
        source: [root],
        lazyLoad: (event, data) => {
            var deferredResult = jQuery.Deferred();
            const node = data.node;
            switch (node.type) {
                case 'amp-parent': {
                    fetchAmps(deferredResult);
                    break;
                }
                case 'amp': {
                    fetchAmpps(node, deferredResult);
                    break;
                }
                case 'more-amp': {
                    fetchMoreAmps(deferredResult)
                    break;
                }
            }
            data.result = deferredResult;
        }
    });
}

let pageNumber = 1;

function fetchAmps(deferredResult) {
    'use strict';

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    fetch(`${context}/hierarchy/ampsForVmp/${vmpId}?page=${pageNumber}&size=100`, {
        size: 100
    })
        .then(response => response.json())
        .then((result) => {
            const apiPromises = [];
            let pagesRequired = Math.ceil(result.total / 100);
            const amps = [];
            result.content.forEach((amp) => {
                amps.push({
                    title: `${amp.productName} (${amp.supplierName}) ${amp.sizeWeight ? '(' + amp.sizeWeight + ')' : ''} ${amp.colour ? '(' + capitalizeFirstLetter(amp.colour) + ')' : ''}`,
                    discontinued: amp.availabilityRestrictions,
                    ppaCode: amp.codes,
                    invalid: amp.invalid,
                    sizeWeight: amp.sizeWeight,
                    colour: amp.colour,
                    parallelImportProduct: amp.parallelImportProduct,
                    futureDated: amp.futureDated,
                    supplierName: amp.supplierName,
                    supplierTypeIndicator: amp.supplierTypeIndicator,
                    type: 'amp',
                    key: `amp-${amp.id}`,
                    id: amp.id,
                    folder: true,
                    lazy: true,
                    totalElements: result.total,
                });
            });

            if (pagesRequired > 1 && ((pageNumber + 1) < pagesRequired)) {
                amps.push({
                    title: `AMPs continued (${pageNumber * 100 + 1}-${pageNumber * 100 + 100}/${result.total})`,
                    key: 'more',
                    type: 'more-amp',
                    id: `${pageNumber * 100 + 100}`,
                    lazy: true
                });
            } else if (pagesRequired > 1 && ((pageNumber + 1) === pagesRequired)) {
                amps.push({
                    title: `AMPs continued (${(pageNumber * 100 + 1) + '-' +(result.total)}/${result.total})`,
                    key: 'more',
                    type: 'more-amp',

                    lazy: true
                });
            }
            deferredResult.resolve(amps);
        })
        .catch(e => console.log(e));
}

function fetchMoreAmps(deferredResult) {
    'use strict';

    pageNumber += 1;

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    fetch(`${context}/hierarchy/ampsForVmp/${vmpId}?page=${pageNumber}&size=100&sortType=supplier`, {
        size: 100
    })
        .then(response => response.json())
        .then((result) => {
            const apiPromises = [];
            let pagesRequired = Math.ceil(result.total / 100);
            const amps = [];
            result.content.forEach((amp) => {
                amps.push({
                    title: `${amp.productName} (${amp.supplierName}) ${amp.sizeWeight ? '(' + amp.sizeWeight + ')' : ''} ${amp.colour ? '(' + capitalizeFirstLetter(amp.colour) + ')' : ''}`,
                    discontinued: amp.discontinued,
                    ppaCode: amp.codes,
                    invalid: amp.invalid,
                    sizeWeight: amp.sizeWeight,
                    colour: amp.colour,
                    parallelImportProduct: amp.parallelImportProduct,
                    futureDated: amp.futureDated,
                    supplierName: amp.supplierName,
                    supplierTypeIndicator: amp.supplierTypeIndicator,
                    type: 'amp',
                    key: `amp-${amp.id}`,
                    id: amp.id,
                    folder: true,
                    lazy: true
                });
            });

            if (pagesRequired > 1 && ((pageNumber + 1) < pagesRequired)) {
                amps.push({
                    title: `AMPs continued (${((pageNumber * 100) +1) + '-' +(pageNumber * 100 + 100)}/${result.total})`,
                    key: 'more',
                    type: 'more-amp',
                    id: `${pageNumber * 100 + 100}`,
                    lazy: true
                });

            } else if (pagesRequired > 1 && ((pageNumber + 1) === pagesRequired)) {
                amps.push({
                    title: `AMPs (${((pageNumber * 100) +1) + '-' +(result.total)}/${result.total})`,
                    key: 'more',
                    type: 'more-amp',
                    id: result.total,
                    lazy: true
                });
            }

            deferredResult.resolve(amps);
        })
        .catch(e => console.log(e));
}

function fetchAmpps(data, deferredResult) {
    'use strict';

    fetch(`${context}/hierarchy/amppsForAmp/${data.data.id}?page=1&size=100`)
        .then(response => response.json())
        .then((result) => {
            const ampps = [];
            result.forEach((ampp) => {
                ampps.push({
                    title: `${ampp.quantity} ${ampp.quantityUnitOfMeasure.toLowerCase()}`,
                    discontinued: ampp.discontinued,
                    quantity: `${ampp.quantity}`,
                    invalid: ampp.invalid,
                    startDate: `${ampp.startDate}`,
                    children: ampp.componentPacks ? ampp.componentPacks.current : '',
                    type: 'ampp',
                    key: `ampp-${ampp.id}`,
                    id: `${ampp.id}`,
                    pitId: ampp.pitId,
                    drugTariffPaymentCategory: ampp.drugTariffPaymentCategory,
                    indicativePrice: ampp.indicativePrice,
                });
            });

            // sort order of combination packs
            for (const element of ampps) {
                if (element.children) {
                    element.children.sort(function(a, b) {
                        return a.quantity - b.quantity
                    });
                }
            }

            ampps.sort(function(a, b) {
                return a.quantity - b.quantity
            });

            deferredResult.resolve(ampps);
        })
        .catch(e => console.log(e));
}

export {
    SetupTree
}

    ;
(function($, undefined) {

    "use strict";

    /*jshint unused:false */


    $.ui.fancytree.registerExtension({
        // Every extension must be registered by a unique name.
        name: "tabable",
        // Version information should be compliant with [semver](http://semver.org)
        version: "1.0.0",

        // Extension specific options and their defaults.
        // This options will be available as `tree.options.childcounter.hideExpanded`

        options: {

        },


        treeInit: function(ctx) {
            this._super(ctx);
            this.$container.on("keyup", '.fancytree-node', function(evt) {

                //captures pressing enter on treeitem
                if (evt.which == 13) {
                    var node = $.ui.fancytree.getNode(evt);
                    if (node.data.href) {
                        window.location.href = node.data.href;
                    } else {
                        node.toggleExpanded();
                    }

                }

            });
        },
        // Overload the `renderTitle` hook, to set the tabindex property
        nodeRenderTitle: function(ctx, title) {
            var node = ctx.node,
                span = $(node.span);

            // Let the base implementation render the title
            this._super(ctx, title);
            //Set the Tabindex to zero
            span.prop("tabindex", "0"); //Make  span focusable so we can tab into it

        },
        // Overload the `setActive` hook, so that when you using key board up and down arrow key we can move foucs
        nodeSetActive: function(ctx, flagopt, optsopt) {
            var node = ctx.node,
                span = $(node.span);
            this._super(ctx, flagopt, optsopt);
            span.focus();
        },
        // Destroy this tree instance (we only call the default implementation, so
        // this method could as well be omitted).

        treeDestroy: function(ctx) {
            this._super(ctx);
        },


        // End of extension definition
    });
    // End of namespace closure
}(jQuery));