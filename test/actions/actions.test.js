import * as actions from '../../src/actions/index'
import * as types from '../../src/actions/actionTypes'


describe('actions', () => {
  it('should create an action for equalClicked', () => {
    const answer = '0'
    const expectedAction = {
      type: types.EVALUATE,
      answer
    }
    expect(actions.equalClicked(answer)).toEqual(expectedAction)
  })

    it('should create an action for clearValue', () => {
    const expectedAction = {
      type: types.CLEAR_ALL
    }
    expect(actions.clearValue()).toEqual(expectedAction)
  })

    it('should create an action for charDelete', () => {
    const expectedAction = {
      type: types.DELETE
    }
    expect(actions.deleteLastValue()).toEqual(expectedAction)
  })

    it('should create an action for memoryStorage', () => {
    const expectedAction = {
      type: types.MEMORY_STORAGE
    }
    expect(actions.memoryStorage()).toEqual(expectedAction)
  })

    it('should create an action for memoryRet', () => {
    const expectedAction = {
      type: types.MEMORY_RET
    }
    expect(actions.memoryRet()).toEqual(expectedAction)
  })

    it('should create an action for memoryClear', () => {
    const expectedAction = {
      type: types.MEMORY_CLEAR
    }
    expect(actions.memoryClear()).toEqual(expectedAction)
  })
  it('should create an action for buttonClicked', () => {
    const value = '0'
    const expectedAction = {
      type: types.BUTTON_CLICKED,
      value
    }
    expect(actions.buttonClicked(value)).toEqual(expectedAction)
  })
  it('should create an action for handleError', () => {
    const value = '0'
    const expectedAction = {
      type: types.ERROR,
    }
    expect(actions.handleError()).toEqual(expectedAction)
  })
})

