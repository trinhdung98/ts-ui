import { createStyles } from '@material-ui/styles';

export const commentStyles = () =>
    createStyles({
        inputRoot: {
            paddingRight: 10,
        },
        textField: {
            fontWeight: 400,
            fontSize: '14px ',
            width: '100%',
            margin: 0,
            WebkitBoxShadow: 'none',
            boxShadow: 'none',
            borderColor: 'transparent',
            height: 38,
            border: '1px solid #000',
            resize: 'none',
        },
        header: {
            padding: '2px 3px 3px 10px !important',
        },
        popperOpen: {
            zIndex: 11,
        },
        popperClose: {
            pointerEvents: 'none',
            zIndex: 0,
        },
        iconButton: {
            top: 0,
            display: 'flex',
            right: 4,
            flexDirection: 'row-reverse',
            position: 'absolute',
        },
        commentBody: {
            color: 'black',
            fontWeight: 400,
            fontSize: '12px',
            height: '100%',
            border: 'none',
            width: '100%',
            outline: 'none',
            resize: 'none',
        },
        rightIconMenuItem: {
            fontSize: 12,
            fontWeight: 300,
            paddingLeft: 6,
            paddingRight: 6,
            paddingTop: 0,
            paddingBottom: 0,
        },
        moreIcon: {
            width: '0.6em',
            height: '0.6em',
        },
        menuRoot: {
            marginTop: 7,
            marginLeft: -15,
            alignSelf: 'center',
        },
        avatar: {
            alignSelf: 'flex-start',
            marginTop: 10,
        },
    });
