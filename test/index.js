const assert = require('assert')
const StringNumeralSystem = require('../src')

describe('interface', function () {
    const sns = StringNumeralSystem('1abc');

    it('increment', () => {
        assert.strictEqual(sns.increment('ab'), 'ac');
        assert.strictEqual(sns.increment('ac'), 'b1');
        assert.strictEqual(sns.increment('b1'), 'ba');
        assert.strictEqual(sns.increment('bab1'), 'baba');
        assert.strictEqual(sns.increment('111111'), '11111a');
        assert.strictEqual(sns.increment('cc'), '111');

        assert.strictEqual(sns.increment('1'), 'a');
        assert.strictEqual(sns.increment('b'), 'c');
        assert.strictEqual(sns.increment('c'), '11');
    })

    it('increment error', () => {
        assert.throws(() => {
            sns.increment('abz');
        }, /Invalid number, allowed characters: 1abc/)
    })

    it('max', () => {
        assert.strictEqual(sns.max('bc', 'c1'), 'c1')
        assert.strictEqual(sns.max('1', '1'), '1')
        assert.strictEqual(sns.max('ccc', 'bcbc'), 'bcbc')
        assert.strictEqual(sns.max('ccc', 'cc1'), 'ccc')
    })

    it('min', () => {
        assert.strictEqual(sns.min('bc', 'c1'), 'bc')
        assert.strictEqual(sns.min('1', '1'), '1')
        assert.strictEqual(sns.min('ccc', 'bcbc'), 'ccc')
        assert.strictEqual(sns.min('ccc', 'cc1'), 'cc1')
    })
})
