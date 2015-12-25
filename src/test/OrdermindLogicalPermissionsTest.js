var OrdermindLogicalPermissions = require('../lib/OrdermindLogicalPermissions.js');
var assert = require('assert');
describe('OrdermindLogicalPermissions', function() {

  describe('creation', function () {
    it('should create a OrdermindLogicalPermissions instance', function () {
      var lp = new OrdermindLogicalPermissions();
      assert(lp instanceof OrdermindLogicalPermissions);
    });
  });

  /*-----------OrdermindLogicalPermissions::addType()-------------*/

  describe('testAddTypeParamNameMissing', function() {
    it('should call OrdermindLogicalPermissions::addType() with no "name" parameter and catch a MissingArgumentException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        lp.addType();
      }, function(err) {return err.name === 'MissingArgumentException';});
    });
  });
  describe('testAddTypeParamNameWrongType', function() {
    it('should call OrdermindLogicalPermissions::addType() with the wrong data type for the "name" parameter and catch an InvalidArgumentTypeException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        lp.addType(0, function(){});
      }, function(err) {return err.name === 'InvalidArgumentTypeException';});
    });
  });
  describe('testAddTypeParamNameEmpty', function() {
    it('should call OrdermindLogicalPermissions::addType() with an empty string for "name" parameter and catch an InvalidArgumentValueException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        lp.addType('', function(){});
      }, function(err) {return err.name === 'InvalidArgumentValueException';});
    });
  });
  describe('testAddTypeParamCallbackMissing', function() {
    it('should call OrdermindLogicalPermissions::addType() with no "callback" parameter and catch a MissingArgumentException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        lp.addType('test');
      }, function(err) {return err.name === 'MissingArgumentException';});
    });
  });
  describe('testAddTypeParamCallbackWrongType', function() {
    it('should call OrdermindLogicalPermissions::addType() with the wrong data type for the "name" parameter and catch an InvalidArgumentTypeException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        lp.addType('test', 0);
      }, function(err) {return err.name === 'InvalidArgumentTypeException';});
    });
  });
  describe('testAddType', function() {
    it('should call OrdermindLogicalPermissions::addType() and assert that the type was indeed added', function() {
      var lp = new OrdermindLogicalPermissions();
      lp.addType('test', function(){});
      assert(lp.typeExists('test'));
    });
  });
  
  /*-------------OrdermindLogicalPermissions::removeType()--------------*/
  
  describe('testRemoveTypeParamNameMissing', function() {
    it('should call OrdermindLogicalPermissions::removeType() with no "name" parameter and catch a MissingArgumentException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        lp.removeType();
      }, function(err) {return err.name === 'MissingArgumentException';});
    });
  });
  describe('testRemoveTypeParamNameWrongType', function() {
    it('should call OrdermindLogicalPermissions::removeType() with the wrong data type for the "name" parameter and catch an InvalidArgumentTypeException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        lp.removeType(0);
      }, function(err) {return err.name === 'InvalidArgumentTypeException';});
    });
  });
  describe('testRemoveTypeParamNameEmpty', function() {
    it('should call OrdermindLogicalPermissions::removeType() with an empty string for "name" parameter and catch an InvalidArgumentValueException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        lp.removeType('');
      }, function(err) {return err.name === 'InvalidArgumentValueException';});
    });
  });
  describe('testRemoveTypeParamNameDoesntExist', function() {
    it('should call OrdermindLogicalPermissions::removeType() with a "name" parameter that is not registered and catch a PermissionTypeNotRegisteredException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        lp.removeType('test');
      }, function(err) {return err.name === 'PermissionTypeNotRegisteredException';});
    });
  });
  describe('testRemoveType', function() {
    it('should call OrdermindLogicalPermissions::removeType() and successfully remove a registered permission type', function() {
      var lp = new OrdermindLogicalPermissions();
      lp.addType('test', function(){});
      lp.removeType('test');
      assert(!lp.typeExists('test'));
    });
  });
  
  /*-------------OrdermindLogicalPermissions::typeExists()--------------*/
  
  describe('testTypeExistsParamNameMissing', function() {
    it('should call OrdermindLogicalPermissions::typeExists() with no "name" parameter and catch a MissingArgumentException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        lp.typeExists();
      }, function(err) {return err.name === 'MissingArgumentException';});
    });
  });
  describe('testTypeExistsParamNameWrongType', function() {
    it('should call OrdermindLogicalPermissions::typeExists() with the wrong data type for the "name" parameter and catch an InvalidArgumentTypeException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        lp.typeExists(0);
      }, function(err) {return err.name === 'InvalidArgumentTypeException';});
    });
  });
  describe('testTypeExistsParamNameEmpty', function() {
    it('should call OrdermindLogicalPermissions::typeExists() with an empty string for "name" parameter and catch an InvalidArgumentValueException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        lp.typeExists('');
      }, function(err) {return err.name === 'InvalidArgumentValueException';});
    });
  });
  describe('testTypeExists', function() {
    it('should call OrdermindLogicalPermissions::typeExists() and assert that a created type exists', function() {
      var lp = new OrdermindLogicalPermissions();
      assert(!lp.typeExists('test'));
      lp.addType('test', function(){});
      assert(lp.typeExists('test'));
    });
  });
  
  /*-------------OrdermindLogicalPermissions::getTypeCallback()--------------*/
  
  describe('testGetTypeCallbackParamNameMissing', function() {
    it('should call OrdermindLogicalPermissions::getTypeCallback() with no "name" parameter and catch a MissingArgumentException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        lp.getTypeCallback();
      }, function(err) {return err.name === 'MissingArgumentException';});
    });
  });
  describe('testGetTypeCallbackParamNameWrongType', function() {
    it('should call OrdermindLogicalPermissions::getTypeCallback() with the wrong data type for the "name" parameter and catch an InvalidArgumentTypeException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        lp.getTypeCallback(0);
      }, function(err) {return err.name === 'InvalidArgumentTypeException';});
    });
  });
  describe('testGetTypeCallbackParamNameEmpty', function() {
    it('should call OrdermindLogicalPermissions::getTypeCallback() with an empty string for "name" parameter and catch an InvalidArgumentValueException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        lp.getTypeCallback('');
      }, function(err) {return err.name === 'InvalidArgumentValueException';});
    });
  });
  describe('testGetTypeCallbackParamNameDoesntExist', function() {
    it('should call OrdermindLogicalPermissions::getTypeCallback() with a "name" parameter that is not registered and catch a PermissionTypeNotRegisteredException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        lp.getTypeCallback('test');
      }, function(err) {return err.name === 'PermissionTypeNotRegisteredException';});
    });
  });
  describe('testGetTypeCallback', function() {
    it('should call OrdermindLogicalPermissions::getTypeCallback() and successfully get a registered permission type callback', function() {
      var lp = new OrdermindLogicalPermissions();
      var callback = function(){};
      lp.addType('test', callback);
      assert.strictEqual(lp.getTypeCallback('test'), callback);
    });
  });
  
  /*-------------OrdermindLogicalPermissions::getTypes()--------------*/
  
  describe('testGetTypes', function() {
    it('should call OrdermindLogicalPermissions::getTypes() and successfully get all registered types', function() {
      var lp = new OrdermindLogicalPermissions();
      var callback = function(){};
      lp.addType('test', callback);
      var types = lp.getTypes();
      for(var name in types) {
        assert.equal(name, 'test');
        assert.strictEqual(types[name], callback);
      }
      types.test2 = function(){};
      assert(!lp.getTypes().hasOwnProperty('test2'));
    });
  });
  
  /*-------------OrdermindLogicalPermissions::setTypes()--------------*/

  describe('testSetTypesParamTypesMissing', function() {
    it('should call OrdermindLogicalPermissions::setTypes() with no "types" parameter and catch a MissingArgumentException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        lp.setTypes();
      }, function(err) {return err.name === 'MissingArgumentException';});
    });
  });
  describe('testSetTypesParamTypesWrongType', function() {
    it('should call OrdermindLogicalPermissions::setTypes() with the wrong data type for the "types" parameter and catch an InvalidArgumentTypeException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        lp.setTypes(0);
      }, function(err) {return err.name === 'InvalidArgumentTypeException';});
    });
  });
  describe('testSetTypesParamTypesNameWrongType', function() {
    it('should call OrdermindLogicalPermissions::setTypes() with the wrong data type for a type name key and catch an InvalidArgumentValueException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        var types = {0: function(){}};
        lp.setTypes(types);
      }, function(err) {return err.name === 'InvalidArgumentValueException';});
    });
  });
  describe('testSetTypesParamTypesNameEmpty', function() {
    it('should call OrdermindLogicalPermissions::setTypes() with an empty type name key and catch an InvalidArgumentValueException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        var types = {'': function(){}};
        lp.setTypes(types);
      }, function(err) {return err.name === 'InvalidArgumentValueException';});
    });
  });
  describe('testSetTypesParamTypesCallbackWrongType', function() {
    it('should call OrdermindLogicalPermissions::setTypes() with the wrong data type for a type callback and catch an InvalidArgumentValueException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        var types = {'test': 'hej'};
        lp.setTypes(types);
      }, function(err) {return err.name === 'InvalidArgumentValueException';});
    });
  });
  describe('testSetTypes', function() {
    it('should call OrdermindLogicalPermissions::setTypes() and successfully overwrite all types', function() {
      var lp = new OrdermindLogicalPermissions();
      var callback = function(){};
      var types = {'test': callback};
      lp.setTypes(types);
      var existing_types = lp.getTypes();
      for(var name in existing_types) {
        assert.equal(name, 'test');
        assert.strictEqual(types[name], callback);
      }
    });
  });

  /*-------------OrdermindLogicalPermissions::getBypassCallback()--------------*/
  
  describe('testGetBypassCallback', function() {
    it('should call OrdermindLogicalPermissions::getBypassCallback() and check that the callback is null', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.equal(lp.getBypassCallback(), null);
    });
  });
  
  /*-------------OrdermindLogicalPermissions::setBypassCallback()--------------*/
  
  describe('testSetBypassCallbackParamCallbackMissing', function() {
    it('should call OrdermindLogicalPermissions::setBypassCallback() with no "callback" parameter and catch a MissingArgumentException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        lp.setBypassCallback();
      }, function(err) {return err.name === 'MissingArgumentException';});
    });
  });
  describe('testSetBypassCallbackParamCallbackWrongType', function() {
    it('should call OrdermindLogicalPermissions::setBypassCallback() with the wrong data type for the "callback" parameter and catch an InvalidArgumentTypeException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        lp.setBypassCallback(0);
      }, function(err) {return err.name === 'InvalidArgumentTypeException';});
    });
  });
  describe('testSetBypassCallback', function() {
    it('should call OrdermindLogicalPermissions::setBypassCallback() and successfully register a bypass callback', function() {
      var lp = new OrdermindLogicalPermissions();
      var callback = function(){};
      lp.setBypassCallback(callback);
      assert.strictEqual(lp.getBypassCallback(), callback);
    });
  });
 
  /*-------------OrdermindLogicalPermissions::checkAccess()--------------*/
  
  describe('testCheckAccessParamPermissionsMissing', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with no "permissions" parameter and catch a MissingArgumentException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        lp.checkAccess();
      }, function(err) {return err.name === 'MissingArgumentException';});
    });
  });
  describe('testCheckAccessParamPermissionsWrongType', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with the wrong data type for the "permissions" parameter and catch an InvalidArgumentTypeException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        lp.checkAccess([]);
      }, function(err) {return err.name === 'InvalidArgumentTypeException';});
    });
  });
  describe('testCheckAccessParamPermissionsWrongPermissionType', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with an invalid permission value and catch an InvalidArgumentTypeException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      var permissions = {
        flag: true
      };
      assert.throws(function() {
        lp.checkAccess(permissions, {});
      }, function(err) {return err.name === 'InvalidArgumentTypeException';});
    });
  });
  describe('testCheckAccessParamPermissionsNestedTypes', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with nested permission types and catch an InvalidArgumentValueException exception', function() {
      var lp = new OrdermindLogicalPermissions();

      //Directly nested
      var permissions = {
        flag: {
          flag: 'testflag' 
        }
      };
      assert.throws(function() {
        lp.checkAccess(permissions, {});
      }, function(err) {return err.name === 'InvalidArgumentValueException';});
      
      //Indirectly nested
      var permissions = {
        flag: {
          OR: {
            flag: 'testflag'
          }
        }
      };
      assert.throws(function() {
        lp.checkAccess(permissions, {});
      }, function(err) {return err.name === 'InvalidArgumentValueException';});
    });
  });
  describe('testCheckAccessParamPermissionsUnregisteredType', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with an unregistered permission type and catch a PermissionTypeNotRegisteredException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      var permissions = {
        flag: 'testflag'
      };
      assert.throws(function() {
        lp.checkAccess(permissions, {});
      }, function(err) {return err.name === 'PermissionTypeNotRegisteredException';});
    });
  });
  describe('testCheckAccessParamContextMissing', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with no "context" parameter and catch a MissingArgumentException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        lp.checkAccess({});
      }, function(err) {return err.name === 'MissingArgumentException';});
    });
  });
  describe('testCheckAccessParamContextWrongType', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with the wrong data type for the "context" parameter and catch an InvalidArgumentTypeException exception', function() {
      var lp = new OrdermindLogicalPermissions();
      assert.throws(function() {
        lp.checkAccess({}, []);
      }, function(err) {return err.name === 'InvalidArgumentTypeException';});
    });
  });
  describe('testCheckAccessCheckContextPassing', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() and check that the context parameter is passed to the registered callback', function() {
      var lp = new OrdermindLogicalPermissions();
      var user = {
        id: 1
      };
      var bypass_callback = function(context) {
        assert(context.hasOwnProperty('user'));
        assert.equal(context.user, user);
        return true;
      };
      lp.setBypassCallback(bypass_callback);
      lp.checkAccess({}, {user: user});
    });
  });
  describe('testCheckAccessBypassAccessAllow', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() and allow access due to bypassing access', function() {
      var lp = new OrdermindLogicalPermissions();
      var bypass_callback = function(context) {
        return true;
      };
      lp.setBypassCallback(bypass_callback);
      assert(lp.checkAccess({}, {}));
    });
  });
  describe('testCheckAccessBypassAccessDeny', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() and deny access due to no bypassing access and no regular access', function() {
      var lp = new OrdermindLogicalPermissions();
      var bypass_callback = function(context) {
        return false;
      };
      lp.setBypassCallback(bypass_callback);
      assert(!lp.checkAccess({}, {}));
    });
  });
  describe('testCheckAccessNoBypassAccessBooleanAllow', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with no_bypass set to false and allow access due to bypassing access', function() {
      var lp = new OrdermindLogicalPermissions();
      var bypass_callback = function(context) {
        return true;
      };
      lp.setBypassCallback(bypass_callback);
      assert(lp.checkAccess({no_bypass: false}, {}));
    });
  });
  describe('testCheckAccessNoBypassAccessBooleanDeny', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with no_bypass set to true and deny access due to forbidden access bypass and no regular access', function() {
      var lp = new OrdermindLogicalPermissions();
      var bypass_callback = function(context) {
        return true;
      };
      lp.setBypassCallback(bypass_callback);
      assert(!lp.checkAccess({no_bypass: true}, {}));
    });
  });
  describe('testCheckAccessNoBypassAccessObjectAllow', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with no_bypass set to an object and allow access due to bypassing access', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        flag: function(flag, context) {
          var access = false;
          if(flag === 'never_bypass') {
            if(context.hasOwnProperty('user') && context.user.hasOwnProperty('never_bypass')) {
              access = !!context.user.never_bypass; 
            }
            return access;
          }
        }
      };
      lp.setTypes(types);
      var bypass_callback = function(context) {
        return true;
      };
      lp.setBypassCallback(bypass_callback);
      var permissions = {
        no_bypass: {
          flag: 'never_bypass' 
        }
      };
      var user = {
        id: 1,
        never_bypass: false
      };
      assert(lp.checkAccess(permissions, {user: user}));
    });
  });
  describe('testCheckAccessNoBypassAccessObjectDeny', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with no_bypass set to an object and deny access due to forbidden access bypass and no regular access', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        flag: function(flag, context) {
          var access = false;
          if(flag === 'never_bypass') {
            if(context.hasOwnProperty('user') && context.user.hasOwnProperty('never_bypass')) {
              access = !!context.user.never_bypass; 
            }
            return access;
          }
        }
      };
      lp.setTypes(types);
      var bypass_callback = function(context) {
        return true;
      };
      lp.setBypassCallback(bypass_callback);
      var permissions = {
        no_bypass: {
          flag: 'never_bypass' 
        }
      };
      var user = {
        id: 1,
        never_bypass: true
      };
      assert(!lp.checkAccess(permissions, {user: user}));
    });
  });
  describe('testCheckAccessSingleItemAllow', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with single flag and allow access', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        flag: function(flag, context) {
          var access = false;
          if(flag === 'testflag') {
            if(context.hasOwnProperty('user') && context.user.hasOwnProperty('testflag')) {
              access = !!context.user.testflag; 
            }
            return access;
          }
        }
      };
      lp.setTypes(types);
      var permissions = {
        no_bypass: {
          flag: 'never_bypass'
        },
        flag: 'testflag'
      };
      var user = {
        id: 1,
        testflag: true
      };
      assert(lp.checkAccess(permissions, {user: user}));
    });
  });
  describe('testCheckAccessSingleItemDeny', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with single flag and deny access', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        flag: function(flag, context) {
          var access = false;
          if(flag === 'testflag') {
            if(context.hasOwnProperty('user') && context.user.hasOwnProperty('testflag')) {
              access = !!context.user.testflag; 
            }
            return access;
          }
        }
      };
      lp.setTypes(types);
      var permissions = {
        flag: 'testflag'
      };
      var user = {
        id: 1
      };
      assert(!lp.checkAccess(permissions, {user: user}));
    });
  });
  describe('testCheckAccessMultipleTypesShorthandOR', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with multiple permission types (shorthand OR)', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        flag: function(flag, context) {
          var access = false;
          if(flag === 'testflag') {
            if(context.hasOwnProperty('user') && context.user.hasOwnProperty('testflag')) {
              access = !!context.user.testflag; 
            }
            return access;
          }
        },
        role: function(role, context) {
          var access = false;
          if(context.hasOwnProperty('user') && context.user.hasOwnProperty('roles')) {
            access = context.user.roles.indexOf(role) > -1; 
          }
          return access;
        },
        misc: function(item, context) {
          var access = false;
          if(context.hasOwnProperty('user') && context.user.hasOwnProperty(item)) {
            access = !!context.user[item]; 
          }
          return access;
        }
      };
      lp.setTypes(types);
      var permissions = {
        no_bypass: {
          flag: 'never_bypass' 
        },
        flag: 'testflag',
        role: 'admin',
        misc: 'test'
      };
      var user = {
        id: 1
      };
      //OR truth table
      //0 0 0
      assert(!lp.checkAccess(permissions, {user: user}));
      //0 0 1
      user.test = true;
      assert(lp.checkAccess(permissions, {user: user}));
      //0 1 0
      user.test = false;
      user.roles = ['admin'];
      assert(lp.checkAccess(permissions, {user: user}));
      //0 1 1
      user.test = true;
      assert(lp.checkAccess(permissions, {user: user}));
      //1 0 0
      user = {
        id: 1,
        testflag: true
      };
      assert(lp.checkAccess(permissions, {user: user}));
      //1 0 1
      user.test = true;
      assert(lp.checkAccess(permissions, {user: user}));
      //1 1 0
      user.test = false;
      user.roles = ['admin'];
      assert(lp.checkAccess(permissions, {user: user}));
      //1 1 1
      user.test = true;
      assert(lp.checkAccess(permissions, {user: user}));
    });
  });
  describe('testCheckAccessMultipleTypesShorthandOR', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with multiple permission type items (shorthand OR)', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        role: function(role, context) {
          var access = false;
          if(context.hasOwnProperty('user') && context.user.hasOwnProperty('roles')) {
            access = context.user.roles.indexOf(role) > -1; 
          }
          return access;
        }
      };
      lp.setTypes(types);
      var permissions = {
        role: ['admin', 'editor']
      };
      var user = {id: 1};
      //OR truth table
      //0 0
      assert(!lp.checkAccess(permissions, {user: user}));
      user.roles = [];
      assert(!lp.checkAccess(permissions, {user: user}));
      //0 1
      user.roles = ['editor'];
      assert(lp.checkAccess(permissions, {user: user}));
      //1 0
      user.roles = ['admin'];
      assert(lp.checkAccess(permissions, {user: user}));
      //1 1
      user.roles = ['editor', 'admin'];
      assert(lp.checkAccess(permissions, {user: user}));
    });
  });
  describe('testCheckAccessANDWrongValueType', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with an illegal AND value type and catch an InvalidValueForLogicGate exception', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        role: function(role, context) {
          var access = false;
          if(context.hasOwnProperty('user') && context.user.hasOwnProperty('roles')) {
            access = context.user.roles.indexOf(role) > -1; 
          }
          return access;
        }
      };
      lp.setTypes(types);
      var permissions = {
        role: {
          AND: 'admin'
        }
      };
      var user = {
        id: 1,
        roles: ['admin']
      };
      assert.throws(function() {
        lp.checkAccess(permissions, {user: user});
      }, function(err) {return err.name === 'InvalidValueForLogicGate';});
    });
  });
  describe('testCheckAccessANDTooFewElements', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with too few elements in AND value and catch an InvalidValueForLogicGate exception', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        role: function(role, context) {
          var access = false;
          if(context.hasOwnProperty('user') && context.user.hasOwnProperty('roles')) {
            access = context.user.roles.indexOf(role) > -1; 
          }
          return access;
        }
      };
      lp.setTypes(types);
      var user = {
        id: 1,
        roles: ['admin']
      };
      var permissions = {
        role: {
          AND: []
        }
      };
      assert.throws(function() {
        lp.checkAccess(permissions, {user: user});
      }, function(err) {return err.name === 'InvalidValueForLogicGate';});
      
      permissions = {
        role: {
          AND: {}
        }
      };
      assert.throws(function() {
        lp.checkAccess(permissions, {user: user});
      }, function(err) {return err.name === 'InvalidValueForLogicGate';});
    });
  });
  describe('testCheckAccessMultipleItemsAND', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with multiple AND values', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        role: function(role, context) {
          var access = false;
          if(context.hasOwnProperty('user') && context.user.hasOwnProperty('roles')) {
            access = context.user.roles.indexOf(role) > -1; 
          }
          return access;
        }
      };
      lp.setTypes(types);
      var runTruthTable = function runTruthTable(permissions) {
        var user = {id: 1};
        //AND truth table
        //0 0 0
        assert(!lp.checkAccess(permissions, {user: user}));
        user.roles = [];
        assert(!lp.checkAccess(permissions, {user: user}));
        //0 0 1
        user.roles = ['writer'];
        assert(!lp.checkAccess(permissions, {user: user}));
        //0 1 0
        user.roles = ['editor'];
        assert(!lp.checkAccess(permissions, {user: user}));
        //0 1 1
        user.roles = ['editor', 'writer'];
        assert(!lp.checkAccess(permissions, {user: user}));
        //1 0 0
        user.roles = ['admin'];
        assert(!lp.checkAccess(permissions, {user: user}));
        //1 0 1
        user.roles = ['admin', 'writer'];
        assert(!lp.checkAccess(permissions, {user: user}));
        //1 1 0
        user.roles = ['admin', 'editor'];
        assert(!lp.checkAccess(permissions, {user: user}));
        //1 1 1
        user.roles = ['admin', 'editor', 'writer'];
        assert(lp.checkAccess(permissions, {user: user}));
      };

      //Test array values
      var permissions = {
        role: {
          AND: [
            'admin',
            'editor',
            'writer'
          ]
        }
      };
      runTruthTable(permissions);

      //Test object values
      permissions = {
        role: {
          AND: {
            0: 'admin',
            1: 'editor',
            2: 'writer'
          }
        }
      };
      runTruthTable(permissions);

      //Test array/object mixes
      permissions = {
        role: {
          AND: [
            ['admin'],
            {0: 'editor'},
            'writer'
          ]
        }
      };
      runTruthTable(permissions);
      permissions = {
        role: {
          AND: {
            0: ['admin'],
            1: {0: 'editor'},
            2: 'writer'
          }
        }
      };
      runTruthTable(permissions);
    });
  });
  describe('testCheckAccessNANDWrongValueType', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with an illegal NAND value type and catch an InvalidValueForLogicGate exception', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        role: function(role, context) {
          var access = false;
          if(context.hasOwnProperty('user') && context.user.hasOwnProperty('roles')) {
            access = context.user.roles.indexOf(role) > -1; 
          }
          return access;
        }
      };
      lp.setTypes(types);
      var permissions = {
        role: {
          NAND: 'admin'
        }
      };
      var user = {
        id: 1,
        roles: ['admin']
      };
      assert.throws(function() {
        lp.checkAccess(permissions, {user: user});
      }, function(err) {return err.name === 'InvalidValueForLogicGate';});
    });
  });
  describe('testCheckAccessNANDTooFewElements', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with too few elements in NAND value and catch an InvalidValueForLogicGate exception', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        role: function(role, context) {
          var access = false;
          if(context.hasOwnProperty('user') && context.user.hasOwnProperty('roles')) {
            access = context.user.roles.indexOf(role) > -1; 
          }
          return access;
        }
      };
      lp.setTypes(types);
      var user = {
        id: 1,
        roles: ['admin']
      };
      var permissions = {
        role: {
          NAND: []
        }
      };
      assert.throws(function() {
        lp.checkAccess(permissions, {user: user});
      }, function(err) {return err.name === 'InvalidValueForLogicGate';});
      
      permissions = {
        role: {
          NAND: {}
        }
      };
      assert.throws(function() {
        lp.checkAccess(permissions, {user: user});
      }, function(err) {return err.name === 'InvalidValueForLogicGate';});
    });
  });
  describe('testCheckAccessMultipleItemsNAND', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with multiple NAND values', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        role: function(role, context) {
          var access = false;
          if(context.hasOwnProperty('user') && context.user.hasOwnProperty('roles')) {
            access = context.user.roles.indexOf(role) > -1; 
          }
          return access;
        }
      };
      lp.setTypes(types);
      var runTruthTable = function runTruthTable(permissions) {
        var user = {id: 1};
        //NAND truth table
        //0 0 0
        assert(lp.checkAccess(permissions, {user: user}));
        user.roles = [];
        assert(lp.checkAccess(permissions, {user: user}));
        //0 0 1
        user.roles = ['writer'];
        assert(lp.checkAccess(permissions, {user: user}));
        //0 1 0
        user.roles = ['editor'];
        assert(lp.checkAccess(permissions, {user: user}));
        //0 1 1
        user.roles = ['editor', 'writer'];
        assert(lp.checkAccess(permissions, {user: user}));
        //1 0 0
        user.roles = ['admin'];
        assert(lp.checkAccess(permissions, {user: user}));
        //1 0 1
        user.roles = ['admin', 'writer'];
        assert(lp.checkAccess(permissions, {user: user}));
        //1 1 0
        user.roles = ['admin', 'editor'];
        assert(lp.checkAccess(permissions, {user: user}));
        //1 1 1
        user.roles = ['admin', 'editor', 'writer'];
        assert(!lp.checkAccess(permissions, {user: user}));
      };

      //Test array values
      var permissions = {
        role: {
          NAND: [
            'admin',
            'editor',
            'writer'
          ]
        }
      };
      runTruthTable(permissions);

      //Test object values
      permissions = {
        role: {
          NAND: {
            0: 'admin',
            1: 'editor',
            2: 'writer'
          }
        }
      };
      runTruthTable(permissions);

      //Test array/object mixes
      permissions = {
        role: {
          NAND: [
            ['admin'],
            {0: 'editor'},
            'writer'
          ]
        }
      };
      runTruthTable(permissions);
      permissions = {
        role: {
          NAND: {
            0: ['admin'],
            1: {0: 'editor'},
            2: 'writer'
          }
        }
      };
      runTruthTable(permissions);
    });
  });
  describe('testCheckAccessORWrongValueType', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with an illegal OR value type and catch an InvalidValueForLogicGate exception', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        role: function(role, context) {
          var access = false;
          if(context.hasOwnProperty('user') && context.user.hasOwnProperty('roles')) {
            access = context.user.roles.indexOf(role) > -1; 
          }
          return access;
        }
      };
      lp.setTypes(types);
      var permissions = {
        role: {
          OR: 'admin'
        }
      };
      var user = {
        id: 1,
        roles: ['admin']
      };
      assert.throws(function() {
        lp.checkAccess(permissions, {user: user});
      }, function(err) {return err.name === 'InvalidValueForLogicGate';});
    });
  });
  describe('testCheckAccessORTooFewElements', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with too few elements in OR value and catch an InvalidValueForLogicGate exception', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        role: function(role, context) {
          var access = false;
          if(context.hasOwnProperty('user') && context.user.hasOwnProperty('roles')) {
            access = context.user.roles.indexOf(role) > -1; 
          }
          return access;
        }
      };
      lp.setTypes(types);
      var user = {
        id: 1,
        roles: ['admin']
      };
      var permissions = {
        role: {
          OR: []
        }
      };
      assert.throws(function() {
        lp.checkAccess(permissions, {user: user});
      }, function(err) {return err.name === 'InvalidValueForLogicGate';});
      
      permissions = {
        role: {
          OR: {}
        }
      };
      assert.throws(function() {
        lp.checkAccess(permissions, {user: user});
      }, function(err) {return err.name === 'InvalidValueForLogicGate';});
    });
  });
  describe('testCheckAccessMultipleItemsOR', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with multiple OR values', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        role: function(role, context) {
          var access = false;
          if(context.hasOwnProperty('user') && context.user.hasOwnProperty('roles')) {
            access = context.user.roles.indexOf(role) > -1; 
          }
          return access;
        }
      };
      lp.setTypes(types);
      var runTruthTable = function runTruthTable(permissions) {
        var user = {id: 1};
        //OR truth table
        //0 0 0
        assert(!lp.checkAccess(permissions, {user: user}));
        user.roles = [];
        assert(!lp.checkAccess(permissions, {user: user}));
        //0 0 1
        user.roles = ['writer'];
        assert(lp.checkAccess(permissions, {user: user}));
        //0 1 0
        user.roles = ['editor'];
        assert(lp.checkAccess(permissions, {user: user}));
        //0 1 1
        user.roles = ['editor', 'writer'];
        assert(lp.checkAccess(permissions, {user: user}));
        //1 0 0
        user.roles = ['admin'];
        assert(lp.checkAccess(permissions, {user: user}));
        //1 0 1
        user.roles = ['admin', 'writer'];
        assert(lp.checkAccess(permissions, {user: user}));
        //1 1 0
        user.roles = ['admin', 'editor'];
        assert(lp.checkAccess(permissions, {user: user}));
        //1 1 1
        user.roles = ['admin', 'editor', 'writer'];
        assert(lp.checkAccess(permissions, {user: user}));
      };

      //Test array values
      var permissions = {
        role: {
          OR: [
            'admin',
            'editor',
            'writer'
          ]
        }
      };
      runTruthTable(permissions);

      //Test object values
      permissions = {
        role: {
          OR: {
            0: 'admin',
            1: 'editor',
            2: 'writer'
          }
        }
      };
      runTruthTable(permissions);

      //Test array/object mixes
      permissions = {
        role: {
          OR: [
            ['admin'],
            {0: 'editor'},
            'writer'
          ]
        }
      };
      runTruthTable(permissions);
      permissions = {
        role: {
          OR: {
            0: ['admin'],
            1: {0: 'editor'},
            2: 'writer'
          }
        }
      };
      runTruthTable(permissions);
    });
  });
  describe('testCheckAccessNORWrongValueType', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with an illegal NOR value type and catch an InvalidValueForLogicGate exception', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        role: function(role, context) {
          var access = false;
          if(context.hasOwnProperty('user') && context.user.hasOwnProperty('roles')) {
            access = context.user.roles.indexOf(role) > -1; 
          }
          return access;
        }
      };
      lp.setTypes(types);
      var permissions = {
        role: {
          NOR: 'admin'
        }
      };
      var user = {
        id: 1,
        roles: ['admin']
      };
      assert.throws(function() {
        lp.checkAccess(permissions, {user: user});
      }, function(err) {return err.name === 'InvalidValueForLogicGate';});
    });
  });
  describe('testCheckAccessNORTooFewElements', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with too few elements in NOR value and catch an InvalidValueForLogicGate exception', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        role: function(role, context) {
          var access = false;
          if(context.hasOwnProperty('user') && context.user.hasOwnProperty('roles')) {
            access = context.user.roles.indexOf(role) > -1; 
          }
          return access;
        }
      };
      lp.setTypes(types);
      var user = {
        id: 1,
        roles: ['admin']
      };
      var permissions = {
        role: {
          NOR: []
        }
      };
      assert.throws(function() {
        lp.checkAccess(permissions, {user: user});
      }, function(err) {return err.name === 'InvalidValueForLogicGate';});
      
      permissions = {
        role: {
          NOR: {}
        }
      };
      assert.throws(function() {
        lp.checkAccess(permissions, {user: user});
      }, function(err) {return err.name === 'InvalidValueForLogicGate';});
    });
  });
  describe('testCheckAccessMultipleItemsNOR', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with multiple NOR values', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        role: function(role, context) {
          var access = false;
          if(context.hasOwnProperty('user') && context.user.hasOwnProperty('roles')) {
            access = context.user.roles.indexOf(role) > -1; 
          }
          return access;
        }
      };
      lp.setTypes(types);
      var runTruthTable = function runTruthTable(permissions) {
        var user = {id: 1};
        //OR truth table
        //0 0 0
        assert(lp.checkAccess(permissions, {user: user}));
        user.roles = [];
        assert(lp.checkAccess(permissions, {user: user}));
        //0 0 1
        user.roles = ['writer'];
        assert(!lp.checkAccess(permissions, {user: user}));
        //0 1 0
        user.roles = ['editor'];
        assert(!lp.checkAccess(permissions, {user: user}));
        //0 1 1
        user.roles = ['editor', 'writer'];
        assert(!lp.checkAccess(permissions, {user: user}));
        //1 0 0
        user.roles = ['admin'];
        assert(!lp.checkAccess(permissions, {user: user}));
        //1 0 1
        user.roles = ['admin', 'writer'];
        assert(!lp.checkAccess(permissions, {user: user}));
        //1 1 0
        user.roles = ['admin', 'editor'];
        assert(!lp.checkAccess(permissions, {user: user}));
        //1 1 1
        user.roles = ['admin', 'editor', 'writer'];
        assert(!lp.checkAccess(permissions, {user: user}));
      };

      //Test array values
      var permissions = {
        role: {
          NOR: [
            'admin',
            'editor',
            'writer'
          ]
        }
      };
      runTruthTable(permissions);

      //Test object values
      permissions = {
        role: {
          NOR: {
            0: 'admin',
            1: 'editor',
            2: 'writer'
          }
        }
      };
      runTruthTable(permissions);

      //Test array/object mixes
      permissions = {
        role: {
          NOR: [
            ['admin'],
            {0: 'editor'},
            'writer'
          ]
        }
      };
      runTruthTable(permissions);
      permissions = {
        role: {
          NOR: {
            0: ['admin'],
            1: {0: 'editor'},
            2: 'writer'
          }
        }
      };
      runTruthTable(permissions);
    });
  });
  describe('testCheckAccessXORWrongValueType', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with an illegal XOR value type and catch an InvalidValueForLogicGate exception', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        role: function(role, context) {
          var access = false;
          if(context.hasOwnProperty('user') && context.user.hasOwnProperty('roles')) {
            access = context.user.roles.indexOf(role) > -1; 
          }
          return access;
        }
      };
      lp.setTypes(types);
      var permissions = {
        role: {
          XOR: 'admin'
        }
      };
      var user = {
        id: 1,
        roles: ['admin']
      };
      assert.throws(function() {
        lp.checkAccess(permissions, {user: user});
      }, function(err) {return err.name === 'InvalidValueForLogicGate';});
    });
  });
  describe('testCheckAccessXORTooFewElements', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with too few elements in XOR value and catch an InvalidValueForLogicGate exception', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        role: function(role, context) {
          var access = false;
          if(context.hasOwnProperty('user') && context.user.hasOwnProperty('roles')) {
            access = context.user.roles.indexOf(role) > -1; 
          }
          return access;
        }
      };
      lp.setTypes(types);
      var user = {
        id: 1,
        roles: ['admin']
      };
      var permissions = {
        role: {
          XOR: ['admin']
        }
      };
      assert.throws(function() {
        lp.checkAccess(permissions, {user: user});
      }, function(err) {return err.name === 'InvalidValueForLogicGate';});
      
      permissions = {
        role: {
          XOR: {0: 'admin'}
        }
      };
      assert.throws(function() {
        lp.checkAccess(permissions, {user: user});
      }, function(err) {return err.name === 'InvalidValueForLogicGate';});
    });
  });
  describe('testCheckAccessMultipleItemsXOR', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with multiple XOR values', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        role: function(role, context) {
          var access = false;
          if(context.hasOwnProperty('user') && context.user.hasOwnProperty('roles')) {
            access = context.user.roles.indexOf(role) > -1; 
          }
          return access;
        }
      };
      lp.setTypes(types);
      var runTruthTable = function runTruthTable(permissions) {
        var user = {id: 1};
        //OR truth table
        //0 0 0
        assert(!lp.checkAccess(permissions, {user: user}));
        user.roles = [];
        assert(!lp.checkAccess(permissions, {user: user}));
        //0 0 1
        user.roles = ['writer'];
        assert(lp.checkAccess(permissions, {user: user}));
        //0 1 0
        user.roles = ['editor'];
        assert(lp.checkAccess(permissions, {user: user}));
        //0 1 1
        user.roles = ['editor', 'writer'];
        assert(lp.checkAccess(permissions, {user: user}));
        //1 0 0
        user.roles = ['admin'];
        assert(lp.checkAccess(permissions, {user: user}));
        //1 0 1
        user.roles = ['admin', 'writer'];
        assert(lp.checkAccess(permissions, {user: user}));
        //1 1 0
        user.roles = ['admin', 'editor'];
        assert(lp.checkAccess(permissions, {user: user}));
        //1 1 1
        user.roles = ['admin', 'editor', 'writer'];
        assert(!lp.checkAccess(permissions, {user: user}));
      };

      //Test array values
      var permissions = {
        role: {
          XOR: [
            'admin',
            'editor',
            'writer'
          ]
        }
      };
      runTruthTable(permissions);

      //Test object values
      permissions = {
        role: {
          XOR: {
            0: 'admin',
            1: 'editor',
            2: 'writer'
          }
        }
      };
      runTruthTable(permissions);

      //Test array/object mixes
      permissions = {
        role: {
          XOR: [
            ['admin'],
            {0: 'editor'},
            'writer'
          ]
        }
      };
      runTruthTable(permissions);
      permissions = {
        role: {
          XOR: {
            0: ['admin'],
            1: {0: 'editor'},
            2: 'writer'
          }
        }
      };
      runTruthTable(permissions);
    });
  });
  describe('testCheckAccessNOTWrongValueType', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with an illegal NOT value type and catch an InvalidValueForLogicGate exception', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        role: function(role, context) {
          var access = false;
          if(context.hasOwnProperty('user') && context.user.hasOwnProperty('roles')) {
            access = context.user.roles.indexOf(role) > -1; 
          }
          return access;
        }
      };
      lp.setTypes(types);
      var permissions = {
        role: {
          NOT: true
        }
      };
      var user = {
        id: 1,
        roles: ['admin']
      };
      assert.throws(function() {
        lp.checkAccess(permissions, {user: user});
      }, function(err) {return err.name === 'InvalidValueForLogicGate';});
    });
  });
  describe('testCheckAccessNOTTooFewElements', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with too few elements in NOT value and catch an InvalidValueForLogicGate exception', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        role: function(role, context) {
          var access = false;
          if(context.hasOwnProperty('user') && context.user.hasOwnProperty('roles')) {
            access = context.user.roles.indexOf(role) > -1; 
          }
          return access;
        }
      };
      lp.setTypes(types);
      var user = {
        id: 1,
        roles: ['admin']
      };
      var permissions = {
        role: {
          NOT: ''
        }
      };
      assert.throws(function() {
        lp.checkAccess(permissions, {user: user});
      }, function(err) {return err.name === 'InvalidValueForLogicGate';});
      
      permissions = {
        role: {
          NOT: {}
        }
      };
      assert.throws(function() {
        lp.checkAccess(permissions, {user: user});
      }, function(err) {return err.name === 'InvalidValueForLogicGate';});
    });
  });
  describe('testCheckAccessMultipleItemsNOT', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with multiple NOT values and catch an InvalidValueForLogicGate exception', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        role: function(role, context) {
          var access = false;
          if(context.hasOwnProperty('user') && context.user.hasOwnProperty('roles')) {
            access = context.user.roles.indexOf(role) > -1; 
          }
          return access;
        }
      };
      lp.setTypes(types);
      var permissions = {
        role: {
          NOT: {
            0: 'admin',
            1: 'editor',
            2: 'writer'
          }
        }
      };
      assert.throws(function() {
        lp.checkAccess(permissions, {});
      }, function(err) {return err.name === 'InvalidValueForLogicGate';});
    });
  });
  describe('testCheckAccessSingleItemNOTString', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with single NOT string', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        role: function(role, context) {
          var access = false;
          if(context.hasOwnProperty('user') && context.user.hasOwnProperty('roles')) {
            access = context.user.roles.indexOf(role) > -1; 
          }
          return access;
        }
      };
      lp.setTypes(types);
      var permissions = {
        role: {
          NOT: 'admin'
        }
      };
      var user = {
        id: 1,
        roles: ['admin', 'editor']
      };
      assert(!lp.checkAccess(permissions, {user: user}));
      delete user.roles;
      assert(lp.checkAccess(permissions, {user: user}));
      user.roles = ['editor'];
      assert(lp.checkAccess(permissions, {user: user}));
    });
  });
  describe('testCheckAccessSingleItemNOTObject', function() {
    it('should call OrdermindLogicalPermissions::checkAccess() with single NOT object', function() {
      var lp = new OrdermindLogicalPermissions();
      var types = {
        role: function(role, context) {
          var access = false;
          if(context.hasOwnProperty('user') && context.user.hasOwnProperty('roles')) {
            access = context.user.roles.indexOf(role) > -1; 
          }
          return access;
        }
      };
      lp.setTypes(types);
      var permissions = {
        role: {
          NOT: {5: 'admin'}
        }
      };
      var user = {
        id: 1,
        roles: ['admin', 'editor']
      };
      assert(!lp.checkAccess(permissions, {user: user}));
      delete user.roles;
      assert(lp.checkAccess(permissions, {user: user}));
      user.roles = ['editor'];
      assert(lp.checkAccess(permissions, {user: user}));
    });
  });
  //Kom ihåg att testa stöd för blandade arrays och objekt, t ex permissions = {role: {AND: ['admin', {0: 'editor', 1: 'writer'}]}};
});
