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
Ext.define('Ssp.view.tools.studentintake.Checklist', {
	extend: 'Ext.form.Panel',
    mixins: [ 'Deft.mixin.Injectable',
              'Deft.mixin.Controllable'],
	alias: 'widget.studentintakechecklist',
	id : 'StudentIntakeChecklist',
    inject: {
        textStore:'sspTextStore'
    },
    width: '100%',
    height: '100%',
	minHeight: 1000,
	minWidth: 600,
	style: 'padding: 0px 5px 5px 10px',
	initComponent: function() {
		var me=this;
		Ext.apply(me, 
				{
		    	    autoScroll: true,
					border: 0,	
				    bodyPadding: 5,
				    layout: 'anchor',
				    defaults: {
				        anchor: '100%'
				    },
				    defaultType: 'checkbox',
					    dockedItems: [{
				       	    xtype: 'toolbar',
						    items: [{
		  		                   text: me.textStore.getValueByCode('ssp.label.check-all-button','Check All'),
		  		                   xtype: 'button',
		  		                   width: 75,
		  		                   itemId: 'checkButton',
		  		                   handler: function () {
		  		                   var checkboxes = Ext.getCmp('StudentIntakeChecklist').query('[isCheckbox]');
		  		                   Ext.Array.each(checkboxes, function (checkbox) {
		  		                	   	  checkbox.setValue(1);
		  		                   		})
						    }}, 
		 		            {
		  	  		                   text: me.textStore.getValueByCode('ssp.label.clear-all-button','Clear All'),
		  	  		                   xtype: 'button',
		  	  		                   width: 75,
		  	  		                   itemId: 'clearButton',
		  	  		                   handler: function () {
		  	  		                   var checkboxes = Ext.getCmp('StudentIntakeChecklist').query('[isCheckbox]');
		  	  		                   Ext.Array.each(checkboxes, function (checkbox) {
		  	  		                       checkbox.setValue(0);
		  	  		                   });
		  		               }
						    }]
						    }
						    ]
					});
		
		return me.callParent(arguments);
	}
});