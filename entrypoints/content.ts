export default defineContentScript({
	matches: ["https://cubox.pro/*"],
	main() {
		console.log("Hello content.");
	},
});
