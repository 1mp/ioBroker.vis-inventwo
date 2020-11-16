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

        let adapter = this;

        // Begin: states and channels to create
        let states = {
            "Config": {
                type: "channel",
                name: "Configuration",
                icon: "lib/job.png",
                channels: {},
                dps: [
                    {
                        dp: "Theme-Active",
                        name: "Active Theme",
                        states: "inventwo:inventwo;Dark:Dark;Light:Light",
                        role: "inventwo.themes",
                        def: "Dark",
                        unit: ""
                    }
                ]
            },

            "CSS": {
                type: "channel",
                icon: "lib/css.png",
                name: "CSS",
                channels: {
                    "Dark-Theme": {
                        type: "channel",
                        icon: "lib/night.png",
                        name: "Dark-Theme",
                        dps: [
                            // WIDGET DARK
                            {
                                dp: "01_Widget.Color",
                                name: "Widget-Color",
                                role: "inventwo.dark.color",
                                def: "#333333",
                                unit: ""
                            },
                            {
                                dp: "01_Widget.Active-Color",
                                role: "inventwo.dark.color",
                                name: "Widget-Active-Color",
                                def: "#455618",
                                unit: ""
                            },
                            {
                                dp: "01_Widget.Radius",
                                name: "Widget-Radius",
                                role: "inventwo.dark.radius",
                                def: "12px 0px 12px 0px",
                                unit: ""
                            },
                            {
                                dp: "01_Widget.Shadow-Blur",
                                name: "Widget-Shadow-Blur",
                                role: "inventwo.dark.blur",
                                def: "2",
                                unit: "px"
                            },
                            {
                                dp: "01_Widget.Shadow-X",
                                name: "Widget-Shadow-X",
                                role: "inventwo.dark.x",
                                def: "2",
                                unit: "px"
                            },
                            {
                                dp: "01_Widget.Shadow-Y",
                                name: "Widget-Shadow-Y",
                                role: "inventwo.dark.y",
                                def: "2",
                                unit: "px"
                            },
                            {
                                dp: "01_Widget.Shadow-Size",
                                name: "Widget-Shadow-Size",
                                role: "inventwo.dark.size",
                                def: "1",
                                unit: "px"
                            },
                            {
                                dp: "01_Widget.Shadow-Color",
                                name: "Widget-Shadow-Color",
                                role: "inventwo.dark.color",
                                def: "#111111",
                                unit: ""
                            },
                            {
                                dp: "01_Widget.Shadow-Active-Color",
                                name: "Widget-Shadow-Active-Color",
                                role: "inventwo.dark.color",
                                def: "#111111",
                                unit: ""
                            },
                            {
                                dp: "01_Widget.Border-Size",
                                name: "Widget-Border-Size",
                                role: "inventwo.dark.size",
                                def: "0",
                                unit: "px"
                            },
                            {
                                dp: "01_Widget.Border-Style",
                                name: "Widget-Border-Style",
                                role: "inventwo.dark.style",
                                states: "dotted:dotted;dashed:dashed;solid:solid;double:double;groove:groove;ridge:ridge;insert:insert;outset:outset;none:none",
                                def: "none:none",
                                unit: ""
                            },
                            {
                                dp: "01_Widget.Border-Color",
                                name: "Widget-Border-Color",
                                role: "inventwo.dark.color",
                                def: "#FFFFFF",
                                unit: ""
                            },
                            {
                                dp: "01_Widget.Border-Active-Color",
                                name: "Widget-Border-Active-Color",
                                role: "inventwo.dark.color",
                                def: "#FFFFFF",
                                unit: ""
                            },
                            {
                                dp: "01_Widget.Opacity",
                                name: "Widget-Opacity",
                                role: "inventwo.dark.opacity",
                                def: "1",
                                unit: ""
                            },
                            // CONTENT DARK
                            {
                                dp: "02_Content.Text-Color",
                                name: "Content-Text-Color",
                                role: "inventwo.dark.color",
                                def: "#FFFFFF",
                                unit: ""
                            },
                            {
                                dp: "02_Content.Text-Size",
                                name: "Content-Text-Size",
                                role: "inventwo.dark.size",
                                def: "12",
                                unit: "px"
                            },
                            {
                                dp: "02_Content.Shadow-Blur",
                                name: "Content-Shadow-Blur",
                                role: "inventwo.dark.blur",
                                def: "0",
                                unit: "px"
                            },
                            {
                                dp: "02_Content.Shadow-X",
                                name: "Content-Shadow-X",
                                role: "inventwo.dark.x",
                                def: "0",
                                unit: "px"
                            },
                            {
                                dp: "02_Content.Shadow-Y",
                                name: "Content-Shadow-Y",
                                role: "inventwo.dark.y",
                                def: "0",
                                unit: "px"
                            },
                            {
                                dp: "02_Content.Shadow-Size",
                                name: "Content-Shadow-Size",
                                role: "inventwo.dark.size",
                                def: "0",
                                unit: "px"
                            },
                            {
                                dp: "02_Content.Shadow-Color",
                                name: "Content-Shadow-Color",
                                role: "inventwo.dark.size",
                                def: "#111111",
                                unit: ""
                            },
                            {
                                dp: "02_Content.Shadow-Active-Color",
                                name: "Content-Shadow-Active-Color",
                                role: "inventwo.dark.size",
                                def: "#111111",
                                unit: ""
                            },
                            {
                                dp: "02_Content.Opacity",
                                name: "Content-Opacity",
                                role: "inventwo.dark.opacity",
                                def: "1",
                                unit: ""
                            },
                            // BACKGROUND DARK
                            {
                                dp: "03_Background.URL",
                                name: "Background-URL",
                                role: "inventwo.dark.url",
                                def: "localhost",
                                unit: ""
                            },
                            {
                                dp: "03_Background.Opacity",
                                name: "Background-Opacity",
                                role: "inventwo.dark.opacity",
                                def: "1",
                                unit: ""
                            }
                        ]
                    },
                    "Light-Theme": {
                        type: "channel",
                        icon: "lib/day.png",
                        name: "Light-Theme",
                        dps: [
                            // WIDGET LIGHT
                            {
                                dp: "01_Widget.Color",
                                name: "Widget-Color",
                                role: "inventwo.light.color",
                                def: "#333333",
                                unit: ""
                            },
                            {
                                dp: "01_Widget.Active-Color",
                                role: "inventwo.light.color",
                                name: "Widget-Active-Color",
                                def: "#455618",
                                unit: ""
                            },
                            {
                                dp: "01_Widget.Radius",
                                name: "Widget-Radius",
                                role: "inventwo.light.radius",
                                def: "12px 0px 12px 0px",
                                unit: ""
                            },
                            {
                                dp: "01_Widget.Shadow-Blur",
                                name: "Widget-Shadow-Blur",
                                role: "inventwo.light.blur",
                                def: "2",
                                unit: "px"
                            },
                            {
                                dp: "01_Widget.Shadow-X",
                                name: "Widget-Shadow-X",
                                role: "inventwo.light.x",
                                def: "2",
                                unit: "px"
                            },
                            {
                                dp: "01_Widget.Shadow-Y",
                                name: "Widget-Shadow-Y",
                                role: "inventwo.light.y",
                                def: "2",
                                unit: "px"
                            },
                            {
                                dp: "01_Widget.Shadow-Size",
                                name: "Widget-Shadow-Size",
                                role: "inventwo.light.size",
                                def: "1",
                                unit: "px"
                            },
                            {
                                dp: "01_Widget.Shadow-Color",
                                name: "Widget-Shadow-Color",
                                role: "inventwo.light.color",
                                def: "#111111",
                                unit: ""
                            },
                            {
                                dp: "01_Widget.Shadow-Active-Color",
                                name: "Widget-Shadow-Active-Color",
                                role: "inventwo.light.color",
                                def: "#111111",
                                unit: ""
                            },
                            {
                                dp: "01_Widget.Border-Size",
                                name: "Widget-Border-Size",
                                role: "inventwo.light.size",
                                def: "0",
                                unit: "px"
                            },
                            {
                                dp: "01_Widget.Border-Style",
                                name: "Widget-Border-Style",
                                role: "inventwo.light.style",
                                states: "dotted:dotted;dashed:dashed;solid:solid;double:double;groove:groove;ridge:ridge;insert:insert;outset:outset;none:none",
                                def: "none:none",
                                unit: ""
                            },
                            {
                                dp: "01_Widget.Border-Color",
                                name: "Widget-Border-Color",
                                role: "inventwo.light.color",
                                def: "#FFFFFF",
                                unit: ""
                            },
                            {
                                dp: "01_Widget.Border-Active-Color",
                                name: "Widget-Border-Active-Color",
                                role: "inventwo.light.color",
                                def: "#FFFFFF",
                                unit: ""
                            },
                            {
                                dp: "01_Widget.Opacity",
                                name: "Widget-Opacity",
                                role: "inventwo.light.opacity",
                                def: "1",
                                unit: ""
                            },
                            // CONTENT LIGHT
                            {
                                dp: "02_Content.Text-Color",
                                name: "Content-Text-Color",
                                role: "inventwo.light.color",
                                def: "#FFFFFF",
                                unit: ""
                            },
                            {
                                dp: "02_Content.Text-Size",
                                name: "Content-Text-Size",
                                role: "inventwo.light.size",
                                def: "12",
                                unit: "px"
                            },
                            {
                                dp: "02_Content.Shadow-Blur",
                                name: "Content-Shadow-Blur",
                                role: "inventwo.light.blur",
                                def: "0",
                                unit: "px"
                            },
                            {
                                dp: "02_Content.Shadow-X",
                                name: "Content-Shadow-X",
                                role: "inventwo.light.x",
                                def: "0",
                                unit: "px"
                            },
                            {
                                dp: "02_Content.Shadow-Y",
                                name: "Content-Shadow-Y",
                                role: "inventwo.light.y",
                                def: "0",
                                unit: "px"
                            },
                            {
                                dp: "02_Content.Shadow-Size",
                                name: "Content-Shadow-Size",
                                role: "inventwo.light.size",
                                def: "0",
                                unit: "px"
                            },
                            {
                                dp: "02_Content.Shadow-Color",
                                name: "Content-Shadow-Color",
                                role: "inventwo.light.size",
                                def: "#111111",
                                unit: ""
                            },
                            {
                                dp: "02_Content.Shadow-Active-Color",
                                name: "Content-Shadow-Active-Color",
                                role: "inventwo.light.size",
                                def: "#111111",
                                unit: ""
                            },
                            {
                                dp: "02_Content.Opacity",
                                name: "Content-Opacity",
                                role: "inventwo.light.opacity",
                                def: "1",
                                unit: ""
                            },
                            // BACKGROUND DARK
                            {
                                dp: "03_Background.URL",
                                name: "Background-URL",
                                role: "inventwo.light.url",
                                def: "localhost",
                                unit: ""
                            },
                            {
                                dp: "03_Background.Opacity",
                                name: "Background-Opacity",
                                role: "inventwo.light.opacity",
                                def: "1",
                                unit: ""
                            }
                        ]
                    }

                },
                dps: []
            }
        };
        // End

        this.inventwoDeleteStates();
        setTimeout(function () {
            adapter.createStates(states, "");
        }, 2000);

    }

    // Function to create states and channels
    async createStates(data, path) {
        for (const [key, value] of Object.entries(data)) {

            if (value.type == "channel") {
                let p = "";
                if (path != "")
                    p = path + '.' + key;
                else
                    p = key;

                this.setObjectNotExistsAsync(p, {
                    type: value.type,
                    common: {
                        name: value.name,
                        icon: value.icon
                    },
                    native: {},
                });

                if (value.dps != undefined)
                    this.createStates(value.dps, p);

                if (value.channels != undefined)
                    this.createStates(value.channels, p);
            }
            else {

                this.setObjectNotExistsAsync(path + "." + value.dp, {
                    type: "state",
                    common: {
                        name: value.name,
                        type: "string",
                        states: value.states,
                        role: value.role,
                        read: true,
                        write: true,
                        def: value.def,
                        unit: value.unit
                    },
                    native: {},
                });
            }
        }
    }

    // Function to delete states and channels
    async inventwoDeleteStates() {
        let adapter = this;
        this.getAdapterObjects(function (d) {
            for (const [key, value] of Object.entries(d)) {
                if (key.startsWith("vis-inventwo." + adapter.instance + ".CSS.Dark-Theme") ||
                    key.startsWith("vis-inventwo." + adapter.instance + ".CSS.Light-Theme")) {
                    adapter.delObjectAsync(key);
                }
            }
        });
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
