const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
    // hide all tab panels
    console.log(tabPanels);
    tabPanels.forEach(panel => {
        panel.hidden = true;
    });
    // mark all tabs unselected
    tabButtons.forEach(tab => {
        // tab.ariaSelected = false; - didn't work for aria/custom attributes
        tab.setAttribute('aria-selected', false);
    });
    // mark clicked tab as selected
    event.currentTarget.setAttribute('aria-selected', true);
    // find the associated tabPanel ans show it!
    const { id } = event.currentTarget;

    /*
      Method 1:
      const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
      console.log(tabPanel);
      tabPanel.hidden = false;
  }
  */
    // Method 2 - find in the array of tabPanels
    const tabPanel = tabPanels.find(
        panel => panel.getAttribute('aria-labelledby') === id
    );
    tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
