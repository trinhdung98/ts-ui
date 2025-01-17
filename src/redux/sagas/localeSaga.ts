import { GlobalActionType } from 'constants/globalActionType';
import { all, takeLatest } from 'redux-saga/effects';
import { LanguageType } from 'redux/reducers/locale/langugeType';

/***************************** Subroutines ************************************/

/**
 * Initialize localization
 */
function* initLocalization() {
    const languages = [
        { name: 'English', code: LanguageType.English },
        { name: 'French', code: LanguageType.French },
        { name: 'Spanish', code: LanguageType.Spanish },
    ];
    yield;
    return languages;
}

export default function* localeSaga(): any {
    yield all([takeLatest(GlobalActionType.INIT_LOCALE, initLocalization)]);
}
