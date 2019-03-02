/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
  extend: "Final.Application",

  name: "Final",

  requires: [
    // This will automatically load all classes in the Final namespace
    // so that application classes do not need to require each other.
    "Final.*",
    "Ext.ActionSheet",
    "Ext.data.validator.Email",
    "Ext.Toast"
  ],

  // The name of the initial view to create.
  mainView: "Final.view.main.Main"
});
