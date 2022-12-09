/* jshint esversion: 6 */
(function () {
    'use strict';
    console.log("Initialising view");
    if (document.querySelector("[data-page='view']") === null) {
        return;
    }
    const hierarchyTreeContainer = document.getElementById('drug-hierarchy-tree-container');
    const hierarchyTree = document.getElementById('drug-hierarchy-tree');
    const contentPane = document.getElementById('content-pane');

    const treeState = {
        OPEN: 1,
        CLOSED: 2,
        FULLY_OPEN: 3,
    }
    /* 1: Open
     * 2: closed
     * 3: expanded
     */

    let currentTreeState = treeState.OPEN;

    if (hierarchyTree !== null) {

        const showTreeFullScreen = document.querySelector('.nhsuk-btn-show-full-screen');/*expand button*/
        const resetTreeContainer = document.querySelector('.nhsuk-btn-hide-full-screen');/*minimise button*/

        const showTree = document.querySelector('.nhsuk-btn-show-tree');/*tree button*/
        const hideTree = document.querySelector('.nhsuk-btn-hide-tree');/*hide button*/

        function openTree(){
            hierarchyTree.style.display = "block";

            contentPane.classList.remove('side-tree-view-full');
            contentPane.classList.remove('nhsuk-u-padding-left-9');
            contentPane.classList.add('side-tree-view');

            hierarchyTreeContainer.classList.remove("side-tree-view-full");
            hierarchyTreeContainer.classList.add("side-tree");

            contentPane.style.display = "block";
            hideTree.style.display = "inline-block";
            showTree.style.display = "none";
            resetTreeContainer.style.display = "none";
            showTreeFullScreen.style.display = "inline-block";
        }
        function fullyOpenTree(){
            hierarchyTree.style.display = "block";

            contentPane.classList.remove('side-tree-view');
            contentPane.classList.add('side-tree-view-full');
            contentPane.classList.add('nhsuk-u-padding-left-9');

            hierarchyTreeContainer.classList.remove("side-tree");
            hierarchyTreeContainer.classList.add("side-tree-view-full");

            hideTree.style.display = "inline-block";
            contentPane.style.display = "block";
            showTree.style.display = "none";
            showTreeFullScreen.style.display = "none";
            resetTreeContainer.style.display = "inline-block";
        }
        function closeTree(){
            hierarchyTree.style.display = "none";
            hierarchyTreeContainer.classList.remove("side-tree");
            contentPane.classList.remove('side-tree-view');
            contentPane.classList.add('side-tree-view-full');
            contentPane.classList.add('nhsuk-u-padding-left-9');

            hierarchyTree.style.display = "none";
            showTree.style.display = "inline-block";
            hideTree.style.display = "none";
            resetTreeContainer.style.display = "none";
            showTreeFullScreen.style.display = "none";
        }

        showTree.addEventListener('click', ()=> {
            if ( currentTreeState !== treeState.OPEN ) {
                currentTreeState = treeState.OPEN;
                updatePresentation();
            }
        });

        hideTree.addEventListener('click', ()=> {
            if ( currentTreeState === treeState.FULLY_OPEN ) {
                currentTreeState = treeState.CLOSED;
                updatePresentation();
            } else if ( currentTreeState === treeState.OPEN ) {
                currentTreeState = treeState.CLOSED;
                updatePresentation();
            }
        });

        showTreeFullScreen.addEventListener('click', ()=> {
            if ( currentTreeState !== treeState.FULLY_OPEN ) {
                currentTreeState = treeState.FULLY_OPEN;
                updatePresentation();
            }
        });

        resetTreeContainer.addEventListener('click', ()=> {
            if ( currentTreeState !== treeState.OPEN ) {
                currentTreeState = treeState.OPEN;
                updatePresentation();
            }
        });

        function updatePresentation() {
            if (currentTreeState === treeState.OPEN) {
                openTree();
            } else if (currentTreeState === treeState.FULLY_OPEN) {
                fullyOpenTree();
            } else if (currentTreeState === treeState.CLOSED) {
                closeTree();
            }
        }
    }
})();

