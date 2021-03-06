/*
 * Licensed to Apereo under one or more contributor license
 * agreements. See the NOTICE file distributed with this work
 * for additional information regarding copyright ownership.
 * Apereo licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License.  You may obtain a
 * copy of the License at the following location:
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
Ext.define('Ssp.view.tools.accommodation.Accommodation', {
	extend: 'Ext.panel.Panel',
	alias : 'widget.accommodation',
    mixins: [ 'Deft.mixin.Injectable',
              'Deft.mixin.Controllable'],
    controller: 'Ssp.controller.tool.accommodation.AccommodationToolViewController',
    inject: {
    	authenticatedPerson: 'authenticatedPerson',
    	textStore: 'sspTextStore'
    },
	width: '100%',
	height: '100%',
	initComponent: function() {	
		var me=this;
		Ext.apply(me, 
				{		
		    		layout: 'fit',
		    		padding: 0,
		    		border: 0,
                	title: me.textStore.getValueByCode('ssp.label.accommodation.title','Accommodation'),
					dockedItems: [{
				        dock: 'top',
				        xtype: 'toolbar',
				        items: [{
				        			xtype: 'button', 
				        			itemId: 'saveButton', 
				        			text: me.textStore.getValueByCode('ssp.label.save-button','Save'),
				        			hidden: !me.authenticatedPerson.hasAccess('ACCOMMODATION_SAVE_BUTTON')
				        	   },{
					        	     xtype: 'button', 
					        	     itemId: 'cancelButton', 
					        	     text: me.textStore.getValueByCode('ssp.label.cancel-button','Cancel'),
					        	     hidden: !me.authenticatedPerson.hasAccess('ACCOMMODATION_CANCEL_BUTTON')
				        	   },{
				        	    	xtype: 'label',
				        	    	html: Ssp.util.Constants.DATA_SAVE_SUCCESS_MESSAGE,
				        	    	itemId: 'saveSuccessMessage',
				        	    	style: Ssp.util.Constants.DATA_SAVE_SUCCESS_MESSAGE_STYLE,
				        	    	hidden: true
				        	    }]
					}],
				    
				    items: []
			    
		});
		
		return me.callParent(arguments);
	}
});