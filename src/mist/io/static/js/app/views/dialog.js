define('app/views/dialog', ['app/views/popup'],
    //
    //  Dialog View
    //
    //  @returns Class
    //
    function (PopupView) {

        'use strict';

        return PopupView.extend({


            //
            //
            //  Computed Properties
            //
            //


            isOK: function () {
                return Mist.dialogController.type == DIALOG_TYPES.OK;
            }.property('Mist.dialogController.type'),


            isOKCancel: function () {
                return Mist.dialogController.type == DIALOG_TYPES.OK_CANCEL;
            }.property('Mist.dialogController.type'),


            isYesNo: function () {
                return Mist.dialogController.type == DIALOG_TYPES.YES_NO;
            }.property('Mist.dialogController.type'),


            //
            //
            //  Actions
            //
            //


            actions: {

                reject: function () {
                    Mist.dialogController.reject();
                },


                confirm: function () {
                    Mist.dialogController.confirm();
                },


                commandClicked: function (e) {
                    $(this.popupId + ' .command-container')
                        .toArray()
                        .some(function (commandElement) {
                            if (commandElement.textContent.trim() == e.command) {
                                Mist.selectElementContents(commandElement);
                                return true;
                            }
                    });
                },
            }
        });
    }
);
