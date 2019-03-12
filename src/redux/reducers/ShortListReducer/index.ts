import _ from 'lodash'
import { GET_SHORT_LIST, ADD_TO_SHORT_LIST, ShortListType } from '../../Types'

type ShortListState = {
    shortListItems: ILastFMArtist[]
}

const INITIAL_STATE: ShortListState = {
    shortListItems: []
}

export default (state = INITIAL_STATE, action: ShortListType) => {
    switch (action.type) {
        case GET_SHORT_LIST:
            return state
        case ADD_TO_SHORT_LIST:
            const updateFavItems = _.uniqBy([...state.shortListItems, action.payload], 'name')
            return { ...state, shortListItems: updateFavItems }
        default:
            return state
    }
}