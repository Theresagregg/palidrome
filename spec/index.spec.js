const isPalidrome = require('../index')

describe('isPalidrome', () => {
    it('returns true if pali',() => {
        const value = isPalidrome('racecar')

        expect(value).toBe(true)
    })
})


describe('isPalidrome', () => {
    it('returns false if not pali',() => {
        const value = isPalidrome('javascript')

        expect(value).toBe(false)
    })
})