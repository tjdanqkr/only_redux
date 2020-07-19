import createReducer from "../common/createReducer";
import createItemsLogic from "../common/createItemsLogic";
import mergeReducers from "../common/mergeReducers";

const { add, remove, edit, reducer: timelinesReducer } = createItemsLogic(
  "timelines"
);
const INCREASE_NEXT_PAGE = "timeline/INCREASE_NEXT_PAGE";

export const addTimeline = add;
export const removeTimeline = remove;
export const editTimeline = edit;
export const increaseNextPage = () => ({ type: INCREASE_NEXT_PAGE });

const INITIAL_STATE = { nextPage: 0 };
const reducer = createReducer(INITIAL_STATE, {
  [INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1),
});
const reducers = [reducer, timelinesReducer];
export default mergeReducers(reducers);

// const ADD = "timeline/ADD";
// const REMOVE = "timeline/REMOVE";
// const EDIT = "timeline/EDIT";
// const INCREASE_NEXT_PAGE = "timeline/INCREASE_NEXT_PAGE";

// export const addTimeline = timeline => ({ type: ADD, timeline });
// export const removeTimeline = timeline => ({ type: REMOVE, timeline });
// export const editTimeline = timeline => ({ type: EDIT, timeline });
// export const increaseNextPage = () => ({ type: INCREASE_NEXT_PAGE });

// const INITIAL_STATE = { timeline: [], nextPage: 0 };
// const reducer = createReducer(INITIAL_STATE, {
//   [ADD]: (state, action) => state.timeline.push(action.timeline),
//   [REMOVE]: (state, action) =>
//     (state.timeline = state.timeline.filter(
//       timeline => timeline.id !== action.timeline.id
//     )),
//   [EDIT]: (state, action) => {
//     const index = state.timeline.findIndex(
//       timeline => timeline.id === action.timeline.id
//     );
//     if (index >= 0) {
//       state.timeline[index] = action.timeline;
//     }
//   },
//   [INCREASE_NEXT_PAGE]: (state, action) => (state.nextPage += 1),
// });
// export default reducer;
