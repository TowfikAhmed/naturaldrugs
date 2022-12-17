

// Create a new store instance.
const largeSidebar = {

    namespaced: true,
    state: {
        sidebarToggleProperties: {
            isSideNavOpen: true,
            isSecondarySideNavOpen: false,
            isActiveSecondarySideNav: false
        }
    },
    getters: {
        getSideBarToggleProperties: state => state.sidebarToggleProperties
       

    },
    // we cant use async code ---commit
    mutations: {

        toggleSidebarProperties: state =>
        (state.sidebarToggleProperties.isSideNavOpen = !state
          .sidebarToggleProperties.isSideNavOpen),
    
        toggleSecondarySidebarProperties: state =>
            (state.sidebarToggleProperties.isSecondarySideNavOpen = !state
            .sidebarToggleProperties.isSecondarySideNavOpen),
        toggleSecondarySidebarPropertiesViaMenuItem(state, data) {
            state.sidebarToggleProperties.isSecondarySideNavOpen = data;
            state.sidebarToggleProperties.isActiveSecondarySideNav = data;
        },
        
        toggleSecondarySidebarPropertiesViaOverlay(state) {
            state.sidebarToggleProperties.isSecondarySideNavOpen = !state
            .sidebarToggleProperties.isSecondarySideNavOpen;
        }
    },
    // async code we can use
    actions: {
        changeSidebarProperties({commit}) {
            commit("toggleSidebarProperties");
          },
        changeSecondarySidebarProperties({commit}) {
            commit("toggleSecondarySidebarProperties");
        },
        changeSecondarySidebarPropertiesViaMenuItem({commit}, data) {
            commit("toggleSecondarySidebarPropertiesViaMenuItem", data);
        },
        changeSecondarySidebarPropertiesViaOverlay({commit}) {
            commit("toggleSecondarySidebarPropertiesViaOverlay");
        }
    }
   
}

// const app = createApp({ /* your root component */ })


export default largeSidebar;
