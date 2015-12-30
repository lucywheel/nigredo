
[ui.Popup](http://docs.webix.com/api__refs__ui.popup.html)
StartAPI Reference

ui.popup

A static popup window.

The window can contain any content, be modal or modeless. The main use case - displaying popup content on some action (e.g. click). Check popup documentation for more detailed description.

Constructor

var popup = webix.ui({ view:"popup", id:"my_popup", height:250, width:300, body:{ template:"Some text" } }).show();

Where to start

Overview of the Popup WidgetSamples

Based on: ui.window, ui.view, ui.baseview, Settings, Destruction, BaseBind, UIExtension, Movable, Modality, EventSystem

Methods

adjustadjusts the component to the size of the parent HTML containerattachEventattaches the handler to an inner event of the component (allows behaviour customizations)bindbinds componentsblockEventtemporarily blocks triggering of ALL events of the calling objectcallEventcalls an inner eventcloseremoves a windowdefineredefines a single configuration property (or a hash of properties)destructordestructs the calling objectdetachEventdetaches a handler from an event (which was attached before by the attachEvent method)disabledisables the calling view (makes it dimmed and unclickable)enableenables the calling view that was disabled by the 'disable' methodgetBodygets the ui view of the window bodygetChildViewsreturns child views of the calling componentgetFormViewreturns master form for the inputgetHeadgets the ui view of the window headergetNodereturns the main HTML container for the calling objectgetParentViewreturns the parent view of the componentgetTopParentViewreturns top parent viewhasEventchecks whether the component has the specified eventhidehides the viewisEnabledchecks whether the view is enabledisVisiblechecks whether the view is visiblemapEventroutes events from one object to anotherresizeadjusts the view to a new sizeresizeChildrenresizes all children of the calling componentsetPositionsets window's positionshowmakes the component visibleunbindbreaks "bind" linkunblockEventcancels blocking events that was enabled by the 'blockEvent' command

Events

onAfterScrolloccurs when some webix view has been scrolledonBeforeShowfires right after show() method is called for the window (popup) and before the window is shownonBindRequestfires when the component is ready to receive data from the master componentonBlurfires when focus is moved out of the viewonDestructoccurs when component destroyedonFocusfires when a view gets focusonHidefires when window is hiddenonKeyPressoccurs when keyboard key is pressed for the control in focusonLongTouchfires on holding finger in some position for a certain period of timeonShowfires when window is shownonSwipeXoccurs on a horizontal swipe movementonSwipeYoccurs on a vertical swipe movementonTimedKeyPressfires after typing has been finished in the fieldonTouchEndoccurs when the touch event is endedonTouchMoveoccurs during touch movementonTouchStartwhen some webix view has been touchedonViewMovefires while view is movingonViewMoveEndfires when view has stopped movingonViewResizeview size was changed by resizer

Properties

animatedefines or disables view change animation.autofitadjusts window size to the size of an html node it is initiated inautofocussets focus on the window the moment it appears on the pagebodythe content of window body: template or viewborderlessused to hide the component borderscontaineran html container (or its id) where the component needs initializingcssthe name of a css class that will be applied to the view containerdisabledindicates whether an item is enabled or notgravitysets the view gravity (1 by default)headsets the view headerheadHeightdefines the header height (43 by default)heightsets the height of the componenthiddendefines whether the view will be hidden initiallyidthe component IDleftthe left offset of the windowmaxHeightsets the maximum height for the viewmaxWidthsets the maximum width for the viewminHeightsets the minimal height for the viewminWidthsets the minimal width for the viewmodalswitches window modalitymovemakes view movableonallows attaching custom handlers to inner events of the componentpaddingsets paddings of the chart contentpositionsets position of the window relative to the the screenrelativepositions a popup window relative to the component it's connected withresizeenables/disables window resizingtoFrontplaces window above other windows on clicking ittopthe top offset of a windowwidthsets the width of the componentzIndexstack order of the component

Other

$getSizereturns the current size of the component$heightcurrent height of the view$scopescope for resolving event and method names$setSizesets the component size$skinmethod, which will be called when skin defined$viewreference to top html element of the view$widthcurrent width of the viewconfigall options from initial component configurationnameindicates the name of the component (a read-only property)Back to top

Скопировать еще раз