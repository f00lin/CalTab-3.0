// loads chrome://extensions options

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('options').addEventListener('click', function() {
        chrome.tabs.update({ url: 'chrome://extensions?options=kedcicjgifokpcllhkojofpjbdnbbncc' });
    });
});







