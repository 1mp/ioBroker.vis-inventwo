"use strict";

/*
 * Created with @ioBroker/create-adapter v1.21.1
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require("@iobroker/adapter-core");

// Load  your  modules here, e.g.:
// const fs = require("fs");


class visInventwo extends utils.Adapter {


	/**
	 * @param {Partial<ioBroker.AdapterOptions>} [options={}]
	 */
	constructor(options) {
		super({
			...options,
			name: "vis-inventwo",
		});
		this.on("ready", this.onReady.bind(this));
		// this.on("objectChange", this.onObjectChange.bind(this));
		// this.on("stateChange", this.onStateChange.bind(this));
		// this.on("message", this.onMessage.bind(this));
		this.on("unload", this.onUnload.bind(this));

	}

	/**
	 * Is called when databases are connected and adapter received configuration.
	 */
	async onReady() {
		// Initialize your adapter here

		/*
		For every state in the system there has to be also an object of type state
		Here a simple template for a boolean variable named "testVariable"
		Because every adapter instance uses its own unique namespace variable names can't collide with other adapters variables
		*/


		let cssData = {

			"Dark-Theme": [
				//WIDGET DARK
				{
					dp: "Widget.Color",
					name: "Widget-Color",
					role: "inventwo.dark.color",
					write: false,
					def: "#333333",
					unit: ""
				},
				{
					dp: "Widget.Active-Color",
					role: "inventwo.dark.color",
					name: "Widget-Active-Color",
					write: false,
					def: "#455618",
					unit: ""
				},
				{
					dp: "Widget.Radius",
					name: "Widget-Radius",
					role: "inventwo.dark.radius",
					def: "12px 0px 12px 0px",
					write: false,
					unit: ""
				},
				{
					dp: "Widget.Shadow-Blur",
					name: "Widget-Shadow-Blur",
					role: "inventwo.dark.blur",
					write: false,
					def: "2",
					unit: "px"
				},
				{
					dp: "Widget.Shadow-X",
					name: "Widget-Shadow-X",
					role: "inventwo.dark.x",
					write: false,
					def: "2",
					unit: "px"
				},
				{
					dp: "Widget.Shadow-Y",
					name: "Widget-Shadow-Y",
					role: "inventwo.dark.y",
					write: false,
					def: "2",
					unit: "px"
				},
				{
					dp: "Widget.Shadow-Size",
					name: "Widget-Shadow-Size",
					role: "inventwo.dark.size",
					write: false,
					def: "1",
					unit: "px"
				},
				{
					dp: "Widget.Shadow-Color",
					name: "Widget-Shadow-Color",
					role: "inventwo.dark.color",
					write: false,
					def: "#111111",
					unit: ""
				},
				{
					dp: "Widget.Shadow-Active-Color",
					name: "Widget-Shadow-Active-Color",
					role: "inventwo.dark.color",
					write: false,
					def: "#111111",
					unit: ""
				},
				{
					dp: "Widget.Border-Size",
					name: "Widget-Border-Size",
					role: "inventwo.dark.size",
					write: false,
					def: "0",
					unit: "px"
				},
				{
					dp: "Widget.Border-Color",
					name: "Widget-Border-Color",
					role: "inventwo.dark.color",
					write: false,
					def: "#FFFFFF",
					unit: ""
				},
				{
					dp: "Widget.Border-Active-Color",
					name: "Widget-Border-Active-Color",
					role: "inventwo.dark.color",
					write: false,
					def: "#FFFFFF",
					unit: ""
				},
				{
					dp: "Widget.Opacity",
					name: "Widget-Opacity",
					role: "inventwo.dark.opacity",
					write: false,
					def: "1",
					unit: ""
				},
				// CONTENT DARK
				{
					dp: "Content.Text-Color",
					name: "Content-Text-Color",
					role: "inventwo.dark.color",
					write: false,
					def: "#FFFFFF",
					unit: ""
				},
				{
					dp: "Content.Text-Size",
					name: "Content-Text-Size",
					role: "inventwo.dark.size",
					write: false,
					def: "12",
					unit: "px"
				},
				{
					dp: "Content.Shadow-Blur",
					name: "Content-Shadow-Blur",
					role: "inventwo.dark.blur",
					write: false,
					def: "0",
					unit: "px"
				},
				{
					dp: "Content.Shadow-X",
					name: "Content-Shadow-X",
					role: "inventwo.dark.x",
					write: false,
					def: "0",
					unit: "px"
				},
				{
					dp: "Content.Shadow-Y",
					name: "Content-Shadow-Y",
					role: "inventwo.dark.y",
					write: false,
					def: "0",
					unit: "px"
				},
				{
					dp: "Content.Shadow-Size",
					name: "Content-Shadow-Size",
					role: "inventwo.dark.size",
					write: false,
					def: "0",
					unit: "px"
				},
				{
					dp: "Content.Shadow-Color",
					name: "Content-Shadow-Color",
					role: "inventwo.dark.size",
					write: false,
					def: "#111111",
					unit: ""
				},
				{
					dp: "Content.Shadow-Active-Color",
					name: "Content-Shadow-Active-Color",
					role: "inventwo.dark.size",
					write: false,
					def: "#111111",
					unit: ""
				},
				{
					dp: "Content.Opacity",
					name: "Content-Opacity",
					role: "inventwo.dark.opacity",
					write: false,
					def: "1",
					unit: ""
				},
				// BACKGROUND DARK
				{
					dp: "Background.URL",
					name: "Background-URL",
					role: "inventwo.dark.url",
					write: false,
					def: "localhost",
					unit: ""
				},
				{
					dp: "Background.Opacity",
					name: "Background-Opacity",
					role: "inventwo.dark.opacity",
					write: false,
					def: "1",
					unit: ""
				},
			],
			"Light-Theme": [

			],
			"Custom-Theme": [
				//WIDGET CUSTOM
				{
					dp: "Widget.Color",
					name: "Widget-Color",
					role: "inventwo.custom.color",
					write: true,
					def: "#333333",
					unit: ""
				},
				{
					dp: "Widget.Color-Alt1",
					name: "Widget-Color-Alt1",
					role: "inventwo.custom.color",
					write: true,
					def: "#888888",
					unit: ""
				},
				{
					dp: "Widget.Color-Alt2",
					name: "Widget-Color-Alt2",
					role: "inventwo.custom.color",
					write: true,
					def: "#393939",
					unit: ""
				},
				{
					dp: "Widget.Color-Alt3",
					name: "Widget-Color-Alt3",
					role: "inventwo.custom.color",
					write: true,
					def: "repeating-linear-gradient(-45deg, #333333 0px, #333333 15px, #393939 15px, #393939 30px, #333333 30px)",
					unit: ""
				},
				{
					dp: "Widget.Active-Color",
					name: "Widget-Active-Color",
					role: "inventwo.custom.color",
					write: true,
					def: "#455618",
					unit: ""
				},
				{
					dp: "Widget.Active-Color-Alt1",
					name: "Widget-Active-Color-Alt1",
					role: "inventwo.custom.color",
					write: true,
					def: "#455618",
					unit: "repeating-linear-gradient(-45deg, #455618 0px, #455618 15px, #393939 15px, #393939 30px, #455618 30px)"
				},
				{
					dp: "Widget.Radius",
					name: "Widget-Radius",
					role: "inventwo.custom.radius",
					def: "20px 0px 20px 0px",
					write: true,
					unit: ""
				},
				{
					dp: "Widget.Shadow-Blur",
					name: "Widget-Shadow-Blur",
					role: "inventwo.custom.blur",
					write: true,
					def: "2",
					unit: "px"
				},
				{
					dp: "Widget.Shadow-X",
					name: "Widget-Shadow-X",
					role: "inventwo.custom.x",
					write: true,
					def: "2",
					unit: "px"
				},
				{
					dp: "Widget.Shadow-Y",
					name: "Widget-Shadow-Y",
					role: "inventwo.custom.y",
					write: true,
					def: "2",
					unit: "px"
				},
				{
					dp: "Widget.Shadow-Size",
					name: "Widget-Shadow-Size",
					role: "inventwo.custom.size",
					write: true,
					def: "1",
					unit: "px"
				},
				{
					dp: "Widget.Shadow-Color",
					name: "Widget-Shadow-Color",
					role: "inventwo.custom.color",
					write: true,
					def: "#111111",
					unit: ""
				},
				{
					dp: "Widget.Shadow-Active-Color",
					name: "Widget-Shadow-Active-Color",
					role: "inventwo.custom.color",
					write: true,
					def: "#111111",
					unit: ""
				},
				{
					dp: "Widget.Border-Size",
					name: "Widget-Border-Size",
					role: "inventwo.custom.size",
					write: true,
					def: "0",
					unit: "px"
				},
				{
					dp: "Widget.Border-Color",
					name: "Widget-Border-Color",
					role: "inventwo.custom.color",
					write: true,
					def: "#FFFFFF",
					unit: ""
				},
				{
					dp: "Widget.Border-Active-Color",
					name: "Widget-Border-Active-Color",
					role: "inventwo.custom.color",
					write: true,
					def: "#FFFFFF",
					unit: ""
				},
				{
					dp: "Widget.Opacity",
					name: "Widget-Opacity",
					role: "inventwo.custom.opacity",
					write: true,
					def: "0.7",
					unit: ""
				},
				// CONTENT CUSTOM
				{
					dp: "Content.Text-Color",
					name: "Content-Text-Color",
					role: "inventwo.custom.color",
					write: true,
					def: "#FFFFFF",
					unit: ""
				},
				{
					dp: "Content.Text-Size",
					name: "Content-Text-Size",
					role: "inventwo.custom.size",
					write: true,
					def: "14",
					unit: "px"
				},
				{
					dp: "Content.Text-Size-Alt1",
					name: "Content-Text-Size-Alt1",
					role: "inventwo.custom.size",
					write: true,
					def: "29",
					unit: "px"
				},
				{
					dp: "Content.Shadow-Blur",
					name: "Content-Shadow-Blur",
					role: "inventwo.custom.blur",
					write: true,
					def: "5",
					unit: "px"
				},
				{
					dp: "Content.Shadow-X",
					name: "Content-Shadow-X",
					role: "inventwo.custom.x",
					write: false,
					def: "0",
					unit: "px"
				},
				{
					dp: "Content.Shadow-Y",
					name: "Content-Shadow-Y",
					role: "inventwo.custom.y",
					write: false,
					def: "0",
					unit: "px"
				},
				{
					dp: "Content.Shadow-Size",
					name: "Content-Shadow-Size",
					role: "inventwo.custom.size",
					write: false,
					def: "2",
					unit: "px"
				},
				{
					dp: "Content.Shadow-Color",
					name: "Content-Shadow-Color",
					role: "inventwo.custom.size",
					write: false,
					def: "#666666",
					unit: ""
				},
				{
					dp: "Content.Shadow-Active-Color",
					name: "Content-Shadow-Active-Color",
					role: "inventwo.custom.size",
					write: false,
					def: "#666666",
					unit: ""
				},
				{
					dp: "Content.Opacity",
					name: "Content-Opacity",
					role: "inventwo.custom.opacity",
					write: false,
					def: "0.9",
					unit: ""
				},
				// BACKGROUND CUSTOM
				{
					dp: "Background.URL",
					name: "Background-URL",
					role: "inventwo.custom.url",
					write: false,
					def: "{0_userdata.0.VIS.Wallpaper}",
					unit: "0.5"
				},
				{
					dp: "Background.Opacity",
					name: "Background-Opacity",
					role: "inventwo.custom.opacity",
					write: false,
					def: "1",
					unit: ""
				},
			]
		};

		//Function NICHT LÖSCHEN

		for (const [theme, data] of Object.entries(cssData)) {
			for (const [cssName, val] of Object.entries(data)) {
				this.setObjectNotExistsAsync("CSS." + theme + "." + val.dp, {
					type: "state",
					common: {
						name: val.name,
						type: "string",
						role: val.role,
						read: true,
						write: val.write,
						def: val.def,
						unit: val.unit
					},
					native: {},
				});

			}
		}

		// in this template all states changes inside the adapters namespace are subscribed

		//Widget
		//this.subscribeStates("CSS.Default-Theme.Widget.Color");

		//CONTENT
		//this.subscribeStates("CSS.Default-Theme.Content.Text-Color");

		//BACKGROUND
		//this.subscribeStates("CSS.Default-Theme.Background.URL");

		/*
		setState examples
		you will notice that each setState will cause the stateChange event to fire (because of above subscribeStates cmd)
		*/
		// the variable testVariable is set to true as command (ack=false)
		//this.setStateAsync("testVariable", true);

		// same thing, but the value is flagged "ack"
		// ack should be always set to true if the value is received from or acknowledged from the target system

		// same thing, but the state is deleted after 30s (getState will return null afterwards)
		//this.setStateAsync("testVariable", { val: true, ack: true, expire: 30 });

		// examples for the checkPassword/checkGroup functions
		//let result = this.checkPasswordAsync("admin", "ioBroker");
		//this.log.info("check user admin pw ioBroker: " + result);

		//result = this.checkGroupAsync("admin", "admin");
		//this.log.info("check group user admin group admin: " + result);
	}

	/**
	 * Is called when adapter shuts down - callback has to be called under any circumstances!
	 * @param {() => void} callback
	 */
	onUnload(callback) {
		try {
			this.log.info("cleaned everything up...");
			callback();
		} catch (e) {
			callback();
		}
	}

	/**
	 * Is called if a subscribed object changes
	 * @param {string} id
	 * @param {ioBroker.Object | null | undefined} obj
	 */
	onObjectChange(id, obj) {
		if (obj) {
			// The object was changed
			this.log.info(`object ${id} changed: ${JSON.stringify(obj)}`);
		} else {
			// The object was deleted
			this.log.info(`object ${id} deleted`);
		}
	}

	/**
	 * Is called if a subscribed state changes
	 * @param {string} id
	 * @param {ioBroker.State | null | undefined} state
	 */
	onStateChange(id, state) {
		if (state) {
			// The state was changed
			this.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);

		} else {
			// The state was deleted
			this.log.info(`state ${id} deleted`);
		}
	}

	// /**
	//  * Some message was sent to this instance over message box. Used by email, pushover, text2speech, ...
	//  * Using this method requires "common.message" property to be set to true in io-package.json
	//  * @param {ioBroker.Message} obj
	//  */
	// onMessage(obj) {
	// 	if (typeof obj === "object" && obj.message) {
	// 		if (obj.command === "send") {
	// 			// e.g. send email or pushover or whatever
	// 			this.log.info("send command");

	// 			// Send response in callback if required
	// 			if (obj.callback) this.sendTo(obj.from, obj.command, "Message received", obj.callback);
	// 		}
	// 	}
	// }

}

// @ts-ignore parent is a valid property on module
if (module.parent) {
	// Export the constructor in compact mode
	/**
	 * @param {Partial<ioBroker.AdapterOptions>} [options={}]
	 */
	module.exports = (options) => new visInventwo(options);
} else {
	// otherwise start the instance directly
	new visInventwo();
}
