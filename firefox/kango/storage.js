﻿var utils=require("kango/utils"),array=utils.array,object=utils.object,EventTarget=utils.EventTarget,NotImplementedException=utils.NotImplementedException;function IStorage(){}IStorage.prototype={setItem:function(a,b){throw new NotImplementedException;},getItem:function(a){throw new NotImplementedException;},removeItem:function(a){throw new NotImplementedException;},getKeys:function(){throw new NotImplementedException;},clear:function(){throw new NotImplementedException;}};
function JSONStorage(a){EventTarget.call(this);this._storageEngine=a}
JSONStorage.prototype=object.extend(EventTarget,{_storageEngine:null,getItem:function(a){a=this._storageEngine.getItem(a);return"undefined"!=typeof a&&null!=a?JSON.parse(a):null},setItem:function(a,b){if("undefined"!=typeof b){var c=JSON.stringify(b);"undefined"!=typeof c&&(this._storageEngine.setItem(a,c),this.fireEvent("setItem",{data:{name:a,value:b}}))}else return this.removeItem(a);return!1},removeItem:function(a){this._storageEngine.removeItem(a);this.fireEvent("removeItem",{data:{name:a}})},
getKeys:function(){return this._storageEngine.getKeys()},getItems:function(){var a={};array.forEach(this.getKeys(),function(b){a[b]=this.getItem(b)},this);return a},clear:function(){this._storageEngine.clear();this.fireEvent("clear")},dispose:function(){this.removeAllEventListeners();"undefined"!=typeof this._storageEngine.dispose&&this._storageEngine.dispose();this._storageEngine=null}});function getPublicApi(){return utils.createApiWrapper(module.exports.storage,IStorage.prototype)};








var core=require("kango/core"),extensionInfo=require("kango/extension_info"),utils=require("kango/utils"),object=utils.object;function SQLiteStorageAsync(a){this._tableName=a+"_storage";this._connect=this._openDatabase();this._createDatabase()}
SQLiteStorageAsync.prototype={_getDatabaseFile:function(){return FileUtils.getFile("ProfD",[extensionInfo.package_id+".sqlite"])},_openDatabase:function(){var a=this._getDatabaseFile();return Services.storage.openDatabase(a)},_createDatabase:function(){this._connect.executeSimpleSQL("CREATE TABLE IF NOT EXISTS "+this._tableName+" (key TEXT PRIMARY KEY, value TEXT)")},getItems:function(a){var b={};this._connect.createStatement("SELECT key, value FROM "+this._tableName).executeAsync({handleResult:function(a){for(var d=
a.getNextRow();d;){var e=d.getResultByName("key");b[e]=d.getResultByName("value");d=a.getNextRow()}},handleError:function(a){},handleCompletion:function(c){a(b)}})},setItem:function(a,b,c){var d=this._connect.createStatement("INSERT OR REPLACE INTO "+this._tableName+" (key, value) VALUES(:key, :value)");d.params.key=a;d.params.value=b.toString();d.executeAsync({handleResult:function(a){},handleError:function(a){},handleCompletion:function(a){"function"==typeof c&&c(a==Ci.mozIStorageStatementCallback.REASON_FINISHED)}})},
removeItem:function(a,b){var c=this._connect.createStatement("DELETE FROM "+this._tableName+" WHERE key=:key");c.params.key=a;c.executeAsync({handleResult:function(a){},handleError:function(a){},handleCompletion:function(a){"function"==typeof b&&b(a==Ci.mozIStorageStatementCallback.REASON_FINISHED)}})},clear:function(a){this._connect.createStatement("DELETE FROM "+this._tableName).executeAsync({handleResult:function(a){},handleError:function(a){},handleCompletion:function(b){"function"==typeof a&&
a(b==Ci.mozIStorageStatementCallback.REASON_FINISHED)}})},close:function(){null!=this._connect&&(this._connect.asyncClose(),this._connect=null)},dispose:function(){this.close()},removeDatabase:function(){this.close();this._getDatabaseFile().remove(!1)}};function SQLiteStorageAsyncCache(){this._data={}}
SQLiteStorageAsyncCache.prototype={setItems:function(a){this._data=a},getItem:function(a){return this._data[a]||null},setItem:function(a,b){this._data[a]=b},removeItem:function(a){return delete this._data[a]},clear:function(){this._data={}},getKeys:function(){return object.getKeys(this._data)}};
function SQLiteStorage(a){var b=this;core.addAsyncModule(b);this._storage=a;var c=this._cache=new SQLiteStorageAsyncCache;a.getItems(function(a){c.setItems(a);core.fireEvent("moduleinitialized",{data:b})})}
SQLiteStorage.prototype={getItem:function(a){return this._cache.getItem(a)},setItem:function(a,b){this._cache.setItem(a,b);this._storage.setItem(a,b)},removeItem:function(a){this._cache.removeItem(a);this._storage.removeItem(a)},clear:function(){this._cache.clear();this._storage.clear()},getKeys:function(){return this._cache.getKeys()},dispose:function(){this._storage.dispose();this._cache=this._storage=null}};
core.uninstall?module.exports.uninstall=function(){SQLiteStorageAsync.prototype.removeDatabase()}:(module.exports.storage=new JSONStorage(new SQLiteStorage(new SQLiteStorageAsync("user"))),module.exports.systemStorage=new JSONStorage(new SQLiteStorage(new SQLiteStorageAsync("system"))),module.exports.dispose=function(){exports.storage.dispose();exports.systemStorage.dispose()},module.exports.getPublicApi=getPublicApi);
