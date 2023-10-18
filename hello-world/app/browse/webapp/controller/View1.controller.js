sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("browse.controller.View1", {
            onInit: function () {

            },
            onShowHello : function(){
                const say = this.getView().getModel("say");
                say("/hello", {name: "World"}).then((response) => {
                    console.log(response);
                    this.getView().getModel("ui").setProperty("/hello", response);
                }
                );

            }
        });
    });
