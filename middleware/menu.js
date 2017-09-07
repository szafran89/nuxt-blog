export default function ({store}) {
  if (store.state.menuIsActive) {
    store.commit('TOGGLE_MENU')
  }
}
