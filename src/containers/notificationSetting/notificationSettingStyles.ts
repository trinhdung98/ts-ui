import { createStyles } from '@material-ui/styles';

export const notificationSettingStyles = (theme: any) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        notification: {
            [theme.breakpoints.down('xs')]: {
                marginTop: 25,
            },
        },
        headerCaption: {
            marginLeft: 10,
        },
        cardActions: {
            justifyContent: 'flex-end',
        },
    });
