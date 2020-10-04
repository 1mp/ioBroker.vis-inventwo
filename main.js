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
                        role: "themes",
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
                        role: "dark",
                        channels: {
                            "01_Widget": {
                                type: "channel",
                                icon: "lib/night.png",
                                name: "Widgets",
                                role: "widgets",
                                dps: [
                                    {
                                        dp: "Color",
                                        name: "Widget-Color",
                                        role: "color",
                                        def: "#333333",
                                        unit: ""
                                    },
                                    {
                                        dp: "Active-Color",
                                        role: "color",
                                        name: "Widget-Active-Color",
                                        def: "#455618",
                                        unit: ""
                                    },
                                    {
                                        dp: "Radius",
                                        name: "Widget-Radius",
                                        role: "radius",
                                        def: "12px 0px 12px 0px",
                                        unit: ""
                                    },
                                    {
                                        dp: "Shadow-Blur",
                                        name: "Widget-Shadow-Blur",
                                        role: "blur",
                                        def: "2",
                                        unit: "px"
                                    },
                                    {
                                        dp: "Shadow-X",
                                        name: "Widget-Shadow-X",
                                        role: "x",
                                        def: "2",
                                        unit: "px"
                                    },
                                    {
                                        dp: "Shadow-Y",
                                        name: "Widget-Shadow-Y",
                                        role: "y",
                                        def: "2",
                                        unit: "px"
                                    },
                                    {
                                        dp: "Shadow-Size",
                                        name: "Widget-Shadow-Size",
                                        role: "size",
                                        def: "1",
                                        unit: "px"
                                    },
                                    {
                                        dp: "Shadow-Color",
                                        name: "Widget-Shadow-Color",
                                        role: "color",
                                        def: "#111111",
                                        unit: ""
                                    },
                                    {
                                        dp: "Shadow-Active-Color",
                                        name: "Widget-Shadow-Active-Color",
                                        role: "color",
                                        def: "#111111",
                                        unit: ""
                                    },
                                    {
                                        dp: "Border-Size",
                                        name: "Widget-Border-Size",
                                        role: "size",
                                        def: "0",
                                        unit: "px"
                                    },
                                    {
                                        dp: "Border-Style",
                                        name: "Widget-Border-Style",
                                        role: "style",
                                        states: "dotted:dotted;dashed:dashed;solid:solid;double:double;groove:groove;ridge:ridge;insert:insert;outset:outset;none:none",
                                        def: "none:none",
                                        unit: ""
                                    },
                                    {
                                        dp: "Border-Color",
                                        name: "Widget-Border-Color",
                                        role: "color",
                                        def: "#FFFFFF",
                                        unit: ""
                                    },
                                    {
                                        dp: "Border-Active-Color",
                                        name: "Widget-Border-Active-Color",
                                        role: "color",
                                        def: "#FFFFFF",
                                        unit: ""
                                    },
                                    {
                                        dp: "Opacity",
                                        name: "Widget-Opacity",
                                        role: "opacity",
                                        def: "1",
                                        unit: ""
                                    }
                                ]
                            },
                            "02_Content": {
                                type: "channel",
                                icon: "lib/night.png",
                                name: "Content",
                                role: "content",
                                dps: [
                                    {
                                        dp: "Text-Color",
                                        name: "Content-Text-Color",
                                        role: "color",
                                        def: "#FFFFFF",
                                        unit: ""
                                    },
                                    {
                                        dp: "Text-Size",
                                        name: "Content-Text-Size",
                                        role: "size",
                                        def: "12",
                                        unit: "px"
                                    },
                                    {
                                        dp: "Shadow-Blur",
                                        name: "Content-Shadow-Blur",
                                        role: "blur",
                                        def: "0",
                                        unit: "px"
                                    },
                                    {
                                        dp: "Shadow-X",
                                        name: "Content-Shadow-X",
                                        role: "x",
                                        def: "0",
                                        unit: "px"
                                    },
                                    {
                                        dp: "Shadow-Y",
                                        name: "Content-Shadow-Y",
                                        role: "y",
                                        def: "0",
                                        unit: "px"
                                    },
                                    {
                                        dp: "Shadow-Size",
                                        name: "Content-Shadow-Size",
                                        role: "size",
                                        def: "0",
                                        unit: "px"
                                    },
                                    {
                                        dp: "Shadow-Color",
                                        name: "Content-Shadow-Color",
                                        role: "color",
                                        def: "#111111",
                                        unit: ""
                                    },
                                    {
                                        dp: "Shadow-Active-Color",
                                        name: "Content-Shadow-Active-Color",
                                        role: "size",
                                        def: "#111111",
                                        unit: ""
                                    },
                                    {
                                        dp: "Opacity",
                                        name: "Content-Opacity",
                                        role: "opacity",
                                        def: "1",
                                        unit: ""
                                    }
                                ]
                            },
                            "03_Background": {
                                type: "channel",
                                icon: "lib/night.png",
                                name: "Background",
                                role: "background",
                                dps: [
                                    {
                                        dp: "URL",
                                        name: "Background-URL",
                                        role: "url",
                                        def: "localhost",
                                        unit: ""
                                    },
                                    {
                                        dp: "Opacity",
                                        name: "Background-Opacity",
                                        role: "opacity",
                                        def: "1",
                                        unit: ""
                                    }
                                ]
                            }
                        }
                    },
                    "Light-Theme": {
                        type: "channel",
                        icon: "lib/night.png",
                        name: "Light-Theme",
                        role: "light",
                        channels: {
                            "01_Widget": {
                                type: "channel",
                                icon: "lib/day.png",
                                name: "",
                                dps: [
                                    {
                                        dp: "Color",
                                        name: "Widget-Color",
                                        role: "color",
                                        def: "#333333",
                                        unit: ""
                                    },
                                    {
                                        dp: "Active-Color",
                                        role: "color",
                                        name: "Widget-Active-Color",
                                        def: "#455618",
                                        unit: ""
                                    },
                                    {
                                        dp: "Radius",
                                        name: "Widget-Radius",
                                        role: "radius",
                                        def: "12px 0px 12px 0px",
                                        unit: ""
                                    },
                                    {
                                        dp: "Shadow-Blur",
                                        name: "Widget-Shadow-Blur",
                                        role: "blur",
                                        def: "2",
                                        unit: "px"
                                    },
                                    {
                                        dp: "Shadow-X",
                                        name: "Widget-Shadow-X",
                                        role: "x",
                                        def: "2",
                                        unit: "px"
                                    },
                                    {
                                        dp: "Shadow-Y",
                                        name: "Widget-Shadow-Y",
                                        role: "y",
                                        def: "2",
                                        unit: "px"
                                    },
                                    {
                                        dp: "Shadow-Size",
                                        name: "Widget-Shadow-Size",
                                        role: "size",
                                        def: "1",
                                        unit: "px"
                                    },
                                    {
                                        dp: "Shadow-Color",
                                        name: "Widget-Shadow-Color",
                                        role: "color",
                                        def: "#111111",
                                        unit: ""
                                    },
                                    {
                                        dp: "Shadow-Active-Color",
                                        name: "Widget-Shadow-Active-Color",
                                        role: "color",
                                        def: "#111111",
                                        unit: ""
                                    },
                                    {
                                        dp: "Border-Size",
                                        name: "Widget-Border-Size",
                                        role: "size",
                                        def: "0",
                                        unit: "px"
                                    },
                                    {
                                        dp: "Border-Style",
                                        name: "Widget-Border-Style",
                                        role: "style",
                                        states: "dotted:dotted;dashed:dashed;solid:solid;double:double;groove:groove;ridge:ridge;insert:insert;outset:outset;none:none",
                                        def: "none:none",
                                        unit: ""
                                    },
                                    {
                                        dp: "Border-Color",
                                        name: "Widget-Border-Color",
                                        role: "color",
                                        def: "#FFFFFF",
                                        unit: ""
                                    },
                                    {
                                        dp: "Border-Active-Color",
                                        name: "Widget-Border-Active-Color",
                                        role: "color",
                                        def: "#FFFFFF",
                                        unit: ""
                                    },
                                    {
                                        dp: "Opacity",
                                        name: "Widget-Opacity",
                                        role: "opacity",
                                        def: "1",
                                        unit: ""
                                    }
                                ]
                            },
                            "02_Content": {
                                type: "channel",
                                icon: "lib/night.png",
                                name: "",
                                dps: [
                                    {
                                        dp: "Text-Color",
                                        name: "Content-Text-Color",
                                        role: "color",
                                        def: "#FFFFFF",
                                        unit: ""
                                    },
                                    {
                                        dp: "Text-Size",
                                        name: "Content-Text-Size",
                                        role: "size",
                                        def: "12",
                                        unit: "px"
                                    },
                                    {
                                        dp: "Shadow-Blur",
                                        name: "Content-Shadow-Blur",
                                        role: "blur",
                                        def: "0",
                                        unit: "px"
                                    },
                                    {
                                        dp: "Shadow-X",
                                        name: "Content-Shadow-X",
                                        role: "x",
                                        def: "0",
                                        unit: "px"
                                    },
                                    {
                                        dp: "Shadow-Y",
                                        name: "Content-Shadow-Y",
                                        role: "y",
                                        def: "0",
                                        unit: "px"
                                    },
                                    {
                                        dp: "Shadow-Size",
                                        name: "Content-Shadow-Size",
                                        role: "size",
                                        def: "0",
                                        unit: "px"
                                    },
                                    {
                                        dp: "Shadow-Color",
                                        name: "Content-Shadow-Color",
                                        role: "size",
                                        def: "#111111",
                                        unit: ""
                                    },
                                    {
                                        dp: "Shadow-Active-Color",
                                        name: "Content-Shadow-Active-Color",
                                        role: "size",
                                        def: "#111111",
                                        unit: ""
                                    },
                                    {
                                        dp: "Opacity",
                                        name: "Content-Opacity",
                                        role: "opacity",
                                        def: "1",
                                        unit: ""
                                    }
                                ]
                            },
                            "03_Background": {
                                type: "channel",
                                icon: "lib/night.png",
                                name: "",
                                dps: [
                                    {
                                        dp: "URL",
                                        name: "Background-URL",
                                        role: "url",
                                        def: "localhost",
                                        unit: ""
                                    },
                                    {
                                        dp: "Opacity",
                                        name: "Background-Opacity",
                                        role: "opacity",
                                        def: "1",
                                        unit: ""
                                    }
                                ]
                            }
                        }
                    },

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
                        role: "inventwo." + value.role,
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
                        role: "inventwo." + value.role,
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
