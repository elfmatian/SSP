/*
 * Licensed to Jasig under one or more contributor license
 * agreements. See the NOTICE file distributed with this work
 * for additional information regarding copyright ownership.
 * Jasig licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a
 * copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
Ext.define('Ssp.store.reference.MapElective', {
    extend: 'Ssp.store.reference.AbstractReferences',
    model: 'Ssp.model.reference.Elective',
    constructor: function(){
    	var me=this;
    	me.callParent(arguments);
    	Ext.apply(me.getProxy(),{url: me.getProxy().url + me.apiProperties.getItemUrl('elective')});
    	me.load();
		me.filter('objectStatus', 'ACTIVE');    
		},
    sortInfo:{
        field:'sortOrder',
        direction:'ASC'// or 'DESC' (case sensitive for local sorting)
    }
//    filterByStatus: function(record,id) {
//    	console.log(record);
//    	if(record.get('objectStatus') == 'ACTIVE')
//    		return true;
//    	else
//    		return false;
//    }
});