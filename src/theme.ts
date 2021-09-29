import { createTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
    interface PaletteOptions {
        topbarbg: PaletteOptions['primary'];
        topbaricon: PaletteOptions['primary'];
        topbarname: PaletteOptions['primary'];
        topbarsearch: PaletteOptions['primary'];
        sidebartext: PaletteOptions['primary'];
        themeswitch: PaletteOptions['primary'];
        buttonbg: PaletteOptions['primary'];
        landcardbg: PaletteOptions['primary'];
        landcardtxt: PaletteOptions['primary'];
        landfilthelp: PaletteOptions['primary'];
        cardbg: PaletteOptions['primary'];
        cardstate: PaletteOptions['primary'];
        cardtxt: PaletteOptions['primary'];
        cardprocess: PaletteOptions['primary'];
        dropdownbg: PaletteOptions['primary'];
        inputgroup: PaletteOptions['primary'];
        dateindicator: PaletteOptions['primary'];
        fileinput: PaletteOptions['primary'];
        checkbox: PaletteOptions['primary'];
        switchOff: PaletteOptions['primary'];
        switchOn: PaletteOptions['primary'];
        tabitem: PaletteOptions['primary'];
        tablebody: PaletteOptions['primary'];
        connectmodal: PaletteOptions['primary'];
        separator: PaletteOptions['primary'];
        poor: PaletteOptions['primary'];
        carddetailtxt1: PaletteOptions['primary'];
        cardshadow: PaletteOptions['primary'];
        kycbadge: PaletteOptions['primary'];
        waitstatebadge: PaletteOptions['primary'];
        lockrow: PaletteOptions['primary'];
        progressbar: PaletteOptions['primary'];
    }
}

export const themeLight = createTheme({
    palette: {
        topbarbg: { main: '#FFFFFF', contrastText: '#FFFFFF', dark: '#CFD0E3', light: '#CADFFF' },
        topbaricon: { main: '#FF9900', contrastText: '#F0F0F0' },
        topbarname: { main: '#244B57' },
        topbarsearch: { main: '#CFD0E3', light: '#A4A5C2', dark: '#8E8FAE' },

        sidebartext: { main: '#9494AC' },
        themeswitch: { main: '#E4EEF1' },
        buttonbg: { main: '#FFB800', contrastText: '#464771', dark: '#8889A5', light: '#0F1030' },
        landcardbg: { main: '#FFFBE4', contrastText: '#FFFFFF' },
        landcardtxt: { main: '#969696', contrastText: '#244B57' },
        landfilthelp: { main: '#92939A', contrastText: '#F6F6F6', dark: '#0F1030', light: '#9494AC' },

        dropdownbg: { main: '#F6F6F6' },

        cardbg: { main: '#FFFFFF', contrastText: 'grey', dark: 'radial-gradient(191.76% 112.36% at 50.2% -12.36%, rgba(200, 200, 200, 1) 0%, rgba(250, 250, 250, 1) 67.44%)' },
        cardstate: { main: '#FFFFFF', contrastText: '#0BB63B' },
        cardtxt: { main: '#FF9900', contrastText: '#244B57', dark: '#9494AC' },
        cardprocess: { main: '#ECECEC' },
        cardshadow: { main: 'rgba(58, 104, 124, 0.09)' },

        inputgroup: { main: '#F4F5F8', contrastText: '#6E6F9C' },
        dateindicator: { main: 'invert(0)' },
        fileinput: { main: '#BEC2CD', contrastText: '#979DAF', dark: 'transparent' },
        checkbox: { main: 'transparent', contrastText: '#FFBB0B', dark: '#24265E' },
        switchOff: { main: '#FFFFFF', contrastText: '#DDDDDD' },
        switchOn: { main: '#FFFFFF', contrastText: '#FFBB0B' },

        carddetailtxt1: { main: '#9697A9'},
        kycbadge: { main: '#6CB9FF'},
        waitstatebadge: { main: '#77ADFF'},
        lockrow: { main: '#FAFAFA', contrastText: '#FFFFFF', light: '#9494AC'},
        progressbar: { main: '#ECECEC', contrastText: '#A7ADAF'},
        
        //unsetted
        tabitem: { main: '#969696' },
        tablebody: { main: 'rgb(245,245,245)' },
        connectmodal: { main: '#FAFAFA' },
        separator: { main: 'rgba(0,0,0,.7)' },
        poor: { main: '#414265' }
    }
});

export const themeDark = createTheme({
    palette: {
        topbarbg: { main: '#0F1030', contrastText: '#32345C', dark: 'transparent', light: '#54567E' },
        topbaricon: { main: '#FFDB20', contrastText: '#54567E' },
        topbarname: { main: '#FCFCFC' },
        topbarsearch: { main: 'rgba(46, 47, 100, .8)', light: '#4A4C84', dark: '#6E6F9C' },

        sidebartext: { main: '#92939A' },
        themeswitch: { main: '#2E3065' },
        buttonbg: { main: '#FFBB0B', contrastText: '#464771', dark: '#8889A5', light: '#000000' },
        landcardbg: { main: '#141652', contrastText: 'rgba(20, 22, 82, 0)' },
        landcardtxt: { main: '#9494AC', contrastText: '#FFFFFF' },
        landfilthelp: { main: '#92939A', contrastText: 'rgba(50, 52, 92, .5)', dark: '#FFFFFF', light: '#FFFFFF' },

        dropdownbg: { main: 'rgb(50, 52, 92)' },

        cardbg: { main: '#14163C', contrastText: 'none', dark: 'radial-gradient(191.76% 112.36% at 50.2% -12.36%, rgba(30, 32, 105, 0.96) 0%, rgba(20, 21, 59, 0.96) 67.44%)' },
        cardstate: { main: '#232559', contrastText: '#82FFA5' },
        cardtxt: { main: '#FFBB0B', contrastText: '#FFFFFF', dark: '#9697A9' },
        cardprocess: { main: '#3A3B63' },
        cardshadow: { main: 'transparent' },

        inputgroup: { main: '#06071B', contrastText: '#6E6F9C' },
        dateindicator: { main: 'invert(1)' },
        fileinput: { main: '#FFFFFF', contrastText: '#FFFFFF', dark: '#969696' },
        checkbox: { main: '#FFBB0B', contrastText: '#24265E', dark: '#FFBB0B' },

        switchOff: { main: 'rgba(255, 187, 11,.87)', contrastText: '#02031C' },
        switchOn: { main: '#0F1030', contrastText: '#FFBB0B' },

        carddetailtxt1: { main: '#9697A9'},
        kycbadge: { main: '#003B4E'}, 
        waitstatebadge: { main: '#134794'},
        lockrow: { main: '#0F1030', contrastText: '#323464', light: '#FFFFFF'},
        progressbar: { main: '#2C2D6D', contrastText: '#FFFFFF'},

        //unsetted
        tabitem: { main: 'rgba(255,255,255, 0.7)' },
        tablebody: { main: '#14163B' },
        connectmodal: { main: '#06071B' },
        separator: { main: 'rgba(255,255,255,.2)' },
        poor: { main: '#414265' }
    }
});