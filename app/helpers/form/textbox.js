import React from 'react';

import { View, Text } from 'react-native';
import { Item, Input, Label } from 'native-base';

export const textbox = (locals) => {
    if (locals.hidden) {
        return null;
    }

    const stylesheet = locals.stylesheet;

    let formGroupStyle = stylesheet.formGroup.normal;
    let controlLabelStyle = stylesheet.controlLabel.normal;
    let textboxStyle = stylesheet.textbox.normal;
    let textboxViewStyle = stylesheet.textboxView.normal;
    let helpBlockStyle = stylesheet.helpBlock.normal;
    let errorBlockStyle = stylesheet.errorBlock;

    if (locals.hasError) {
        formGroupStyle = stylesheet.formGroup.error;
        controlLabelStyle = stylesheet.controlLabel.error;
        textboxStyle = stylesheet.textbox.error;
        textboxViewStyle = stylesheet.textboxView.error;
        helpBlockStyle = stylesheet.helpBlock.error;
    }

    if (locals.editable === false) {
        textboxStyle = stylesheet.textbox.notEditable;
        textboxViewStyle = stylesheet.textboxView.notEditable;
    }

    const label = locals.label ? (
        <Label style={controlLabelStyle}>{locals.label}</Label>
    ) : null;

    const help = locals.help ? (
        <Text style={helpBlockStyle}>{locals.help}</Text>
    ) : null;

    const error =
        locals.hasError && locals.error ? (
            <Text accessibilityLiveRegion="polite" style={errorBlockStyle}>
                {locals.error}
            </Text>
        ) : null;

    return (
        <Item floatingLabel
              style={formGroupStyle}>
            {label}
            <View style={textboxViewStyle}>
                <Input
                    accessibilityLabel={locals.label}
                    ref="input"
                    autoCapitalize={locals.autoCapitalize}
                    autoCorrect={locals.autoCorrect}
                    autoFocus={locals.autoFocus}
                    blurOnSubmit={locals.blurOnSubmit}
                    editable={locals.editable}
                    keyboardType={locals.keyboardType}
                    maxLength={locals.maxLength}
                    multiline={locals.multiline}
                    onBlur={locals.onBlur}
                    onEndEditing={locals.onEndEditing}
                    onFocus={locals.onFocus}
                    onLayout={locals.onLayout}
                    onSelectionChange={locals.onSelectionChange}
                    onSubmitEditing={locals.onSubmitEditing}
                    onContentSizeChange={locals.onContentSizeChange}
                    placeholderTextColor={locals.placeholderTextColor}
                    secureTextEntry={locals.secureTextEntry}
                    selectTextOnFocus={locals.selectTextOnFocus}
                    selectionColor={locals.selectionColor}
                    numberOfLines={locals.numberOfLines}
                    underlineColorAndroid={locals.underlineColorAndroid}
                    clearButtonMode={locals.clearButtonMode}
                    clearTextOnFocus={locals.clearTextOnFocus}
                    enablesReturnKeyAutomatically={locals.enablesReturnKeyAutomatically}
                    keyboardAppearance={locals.keyboardAppearance}
                    onKeyPress={locals.onKeyPress}
                    returnKeyType={locals.returnKeyType}
                    selectionState={locals.selectionState}
                    onChangeText={value => locals.onChange(value)}
                    onChange={locals.onChangeNative}
                    placeholder={locals.placeholder}
                    style={textboxStyle}
                    value={locals.value}
                />
            </View>
            {help}
            {error}
        </Item>
    );
};