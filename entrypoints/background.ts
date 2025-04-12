export default defineBackground(() => {
	const allowedDomain = "https://cubox.pro";
	browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
		if (tab.url && !tab.url.startsWith(allowedDomain)) {
			console.log("Blocked activation on unauthorized domain:", tab.url);
			// Optionally, you can add logic to disable certain features here
		}
	});
	console.log("Hello background!", { id: browser.runtime.id });
});
