import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";

/**
 * @name ui5.walkthrough.controller.App
 */
export default class AppController extends Controller {
    onInit() {
        const data = {
            recipient: {
                name: "World"
            }
        };
        const dataModel = new JSONModel(data);
        this.getView()?.setModel(dataModel);

        // Set i18n model on view
         const i18nModel = new ResourceModel({
         bundleName: "ui5.walkthrough.i18n.i18n"
      });
      this.getView()?.setModel(i18nModel, "i18n");
    }
    
    onShowHello() {
        // read msg from i18n model
        const recipient = (this.getView()?.getModel() as JSONModel)?.getProperty("/recipient/name");
        const resourceBundle = (this.getView()?.getModel("i18n") as ResourceModel)?.getResourceBundle() as ResourceBundle;
        const msg = resourceBundle.getText("helloMsg", [recipient]) || "no text defined";

    // show message
    MessageToast.show(msg, {
            at: "CenterTop",
            offset: "0 52"
        });
     }
};