const pageData = {
    showNavBarPage: false
}

function showingNavigationElements(state = pageData, action){
    switch (action.type) {
        case "SHOW_NAVBAR_PAGE":
            return {
                ...state,
                showNavBarPage: !state.showNavBarPage
            }
        default:
            return state
    }
}

export default showingNavigationElements;