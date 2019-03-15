"use strict";

describe("The item store", () => {
    it("should make a request to the restHelper", () => {
        let itemStore = require.requireActual('../../../app/stores/ItemStore.js');
        let restHelper = require('../../../app/helpers/restHelper');

        expect(restHelper.get).toBeCalledWith('items');
    });

	it("Should return the correct items",()=>{
		let restHelper = require('../../../app/helpers/restHelper.js');
		let value = [1,2,3];
		restHelper.__setValue(value);
		let itemStore = require.requireActual('../../../app/stores/itemStore.js');
        
		waitsFor(function() {
			return itemStore.getItems().length > 0;
        }, "Items stores items", 500);
        
		runs(function() {
			expect(itemStore.getItems()).toEqual(value);
		});
    });
});