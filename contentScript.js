document.getElementById('read-content').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0];

        function printTitle() {          
			var list = document.getElementsByClassName("toggle-update-button open");
			for (var i = 0; i < list.length; i++) {
			list[i].click();				
			}};


        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: printTitle,
            //        files: ['contentScript.js'],  // To call external file instead
        }).then(() => console.log('Injected a function!'));
    });
});