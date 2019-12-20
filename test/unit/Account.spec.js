const assert = require('assert');

const Account = require('../../src/Account');

describe('Class Account',  function() {
  describe('Function: constructor', function() {
    it('populates all appropriate keys', function() {
      const accountData = {
        username: 'Test Account',
        characters: [1],
        password: 'IamATeapot',
        banned: true,
        deleted: true,
        metadata: { key: 'val' }
      };
      const accountInstance = new Account(accountData);

      assert.equal(
        accountInstance.username,
        'Test Account',
        'The username is correctly populated.'
      );
      assert.deepEqual(
        accountInstance.characters,
        [1],
        'The array of characters is populated.'
      );
      assert.equal(
        accountInstance.password,
        'IamATeapot',
        'The password field is populated'
      );

      /**
       * The following two tests are asserting true as the default is false,
       * don't want a false positive test!
       */
      assert.equal(
        accountInstance.banned,
        true,
        'The banned boolean is populated'
      );
      assert.equal(
        accountInstance.deleted,
        true,
        'The deleted boolean is populated'
      );

      assert.deepEqual(
        accountInstance.metadata,
        { key: 'val' },
        'The metadata section is populated'
      );
    });
    it('defaults appropriately', function() {
      const accountData = {
        username: 'Test Account',
        password: 'IamATeapot',
      };
      const accountInstance = new Account(accountData);

      assert.deepEqual(
        accountInstance.characters,
        [],
        'The characters field defaults to an empty array.'
      );
      assert.equal(
        accountInstance.banned,
        false,
        'The banned attribute defaults to false'
      );
      assert.equal(
        accountInstance.deleted,
        false,
        'The deleted attribute defaults to false'
      );
      assert.deepEqual(
        accountInstance.metadata,
        {},
        'The metadata attribute defaults to an empty object'
      );
    });
  });
  describe('Function: getUsername', function() {
    it('returns the username attribute of the object', function() {
      const account = new Account({ username: 'TestAccount' })

      assert.equal(
        account.getUsername(),
        'TestAccount',
        'The username attribute of the objet is returned.'
      );
    });
  });
  describe('Function: addCharacter', function() {
    it('adds a new character to the account.', function() {
      const account = new Account({});

      account.addCharacter('TestCharacter');

      assert.deepEqual(
        account.characters,
        [
          {
            'deleted': false,
            'username': 'TestCharacter'
          }
        ],
        'Adds the character to the account with the passed username. The deleted status is automatically set to false.'
      );
    });
  });
  describe('Function: hasCharacter', function() {
    it('determines wether the account has a named character', function() {
      const accountData = {
        characters: [
          { username: 'testuser' }
        ]
      };
      const account = new Account(accountData);

      const result = account.hasCharacter('testuser');

      assert.deepEqual(
        result,
        { username: 'testuser' }
      );
    });
  });
});