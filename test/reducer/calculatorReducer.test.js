import * as types from '../../src/actions/actionTypes'
import reducer from '../../src/reducers/calculator'

const initialState = 


describe('calculator reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
    	{
    		question: "0",
    		answer: "", 
    		memoryValue: "0"
    	})
  })

  it('should handle EVALUATE', () => {
    expect(
      reducer({question: "3+3", answer: "0", memoryValue: "0"}, {
        type: types.EVALUATE,
        answer: "6"
      })
    ).toEqual(
      {
        question: '0',
        answer: '6',
        memoryValue: '0'
      }
    )
  })

   it('should handle BUTTON_CLICKED', () => {
    expect(
      reducer({question: "3+3", answer: "", memoryValue: "0"}, {
        type: types.BUTTON_CLICKED,
        value: "4"
      })
    ).toEqual(
      {
        question: '3+34',
        answer: '',
        memoryValue: '0'
      }
    )

    expect(
      reducer({question: "0", answer: "", memoryValue: "0"}, {
        type: types.BUTTON_CLICKED,
        value: "4"
      })
    ).toEqual(
      {
        question: '4',
        answer: '',
        memoryValue: '0'
      }
    )
  })

  it('should handle CLEAR_ALL', () => {
    expect(
      reducer({question: "3+3", answer: "9", memoryValue: "0"}, {
        type: types.CLEAR_ALL,
      })
    ).toEqual(
      {
        question: '0',
        answer: '',
        memoryValue: '0'
      }
    )
  })

   it('should handle DELETE', () => {
    expect(
      reducer({question: "3+3", answer: "9", memoryValue: "0"}, {
        type: types.DELETE,
      })
    ).toEqual(
      {
        question: '3+',
        answer: '9',
        memoryValue: '0'
      }
    )
  })

  it('should handle MEMORY_STORAGE', () => {
    expect(
      reducer({question: "3+3", answer: "9", memoryValue: "0"}, {
        type: types.MEMORY_STORAGE,
      })
    ).toEqual(
      {
        question: '3+3',
        answer: '9',
        memoryValue: '9'
      }
    )
  })

    it('should handle MEMORY_RET', () => {
	    expect(
	      reducer({question: "3+3+", answer: "9", memoryValue: "10"}, {
	        type: types.MEMORY_RET,
	      })
	    ).toEqual(
	      {
	        question: '3+3+10',
	        answer: '9',
	        memoryValue: '10'
	      }
	    )

	    expect(
	      reducer({question: "0", answer: "0", memoryValue: "10"}, {
	        type: types.MEMORY_RET,
	      })
	    ).toEqual(
	      {
	        question: '10',
	        answer: '0',
	        memoryValue: '10'
	      }
	    )
  })

    it('should handle MEMORY_CLEAR', () => {
	    expect(
	      reducer({question: "3+3+", answer: "9", memoryValue: "10"}, {
	        type: types.MEMORY_CLEAR,
	      })
	    ).toEqual(
	      {
	        question: '3+3+',
	        answer: '9',
	        memoryValue: '0'
	      }
	    )
  })

      it('should handle ERROR', () => {
      expect(
        reducer({question: "(3+3+", answer: "9", memoryValue: "10"}, {
          type: types.ERROR,
        })
      ).toEqual(
        {
          question: '(3+3+',
          answer: 'ERROR',
          memoryValue: '10'
        }
      )
  })


})