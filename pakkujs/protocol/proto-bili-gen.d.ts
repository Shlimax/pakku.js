import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace bilibili. */
export namespace bilibili {

    /** Namespace community. */
    namespace community {

        /** Namespace service. */
        namespace service {

            /** Namespace dm. */
            namespace dm {

                /** Namespace v1. */
                namespace v1 {

                    /** Properties of a DmWebViewReply. */
                    interface IDmWebViewReply {

                        /** DmWebViewReply state */
                        state?: (number|null);

                        /** DmWebViewReply text */
                        text?: (string|null);

                        /** DmWebViewReply textSide */
                        textSide?: (string|null);

                        /** DmWebViewReply dmSge */
                        dmSge?: (bilibili.community.service.dm.v1.IDmSegConfig|null);

                        /** DmWebViewReply flag */
                        flag?: (bilibili.community.service.dm.v1.IDanmakuFlagConfig|null);

                        /** DmWebViewReply specialDms */
                        specialDms?: (string[]|null);

                        /** DmWebViewReply checkBox */
                        checkBox?: (boolean|null);

                        /** DmWebViewReply count */
                        count?: (number|Long|null);

                        /** DmWebViewReply commandDms */
                        commandDms?: (bilibili.community.service.dm.v1.ICommandDm[]|null);

                        /** DmWebViewReply dmSetting */
                        dmSetting?: (bilibili.community.service.dm.v1.IDanmuWebPlayerConfig|null);

                        /** DmWebViewReply reportFilter */
                        reportFilter?: (string[]|null);

                        /** DmWebViewReply expressions */
                        expressions?: (bilibili.community.service.dm.v1.IExpressions[]|null);

                        /** DmWebViewReply postPanel */
                        postPanel?: (bilibili.community.service.dm.v1.IPostPanel[]|null);

                        /** DmWebViewReply activityMetas */
                        activityMetas?: (string[]|null);

                        /** DmWebViewReply postPanelV2 */
                        postPanelV2?: (bilibili.community.service.dm.v1.IPostPanelV2[]|null);

                        /** DmWebViewReply subViews */
                        subViews?: (bilibili.community.service.dm.v1.IDmSubView[]|null);

                        /** DmWebViewReply qoe */
                        qoe?: (bilibili.community.service.dm.v1.IQoeInfo|null);
                    }

                    /** Represents a DmWebViewReply. */
                    class DmWebViewReply implements IDmWebViewReply {

                        /**
                         * Constructs a new DmWebViewReply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IDmWebViewReply);

                        /** DmWebViewReply state. */
                        public state: number;

                        /** DmWebViewReply text. */
                        public text: string;

                        /** DmWebViewReply textSide. */
                        public textSide: string;

                        /** DmWebViewReply dmSge. */
                        public dmSge?: (bilibili.community.service.dm.v1.IDmSegConfig|null);

                        /** DmWebViewReply flag. */
                        public flag?: (bilibili.community.service.dm.v1.IDanmakuFlagConfig|null);

                        /** DmWebViewReply specialDms. */
                        public specialDms: string[];

                        /** DmWebViewReply checkBox. */
                        public checkBox: boolean;

                        /** DmWebViewReply count. */
                        public count: (number|Long);

                        /** DmWebViewReply commandDms. */
                        public commandDms: bilibili.community.service.dm.v1.ICommandDm[];

                        /** DmWebViewReply dmSetting. */
                        public dmSetting?: (bilibili.community.service.dm.v1.IDanmuWebPlayerConfig|null);

                        /** DmWebViewReply reportFilter. */
                        public reportFilter: string[];

                        /** DmWebViewReply expressions. */
                        public expressions: bilibili.community.service.dm.v1.IExpressions[];

                        /** DmWebViewReply postPanel. */
                        public postPanel: bilibili.community.service.dm.v1.IPostPanel[];

                        /** DmWebViewReply activityMetas. */
                        public activityMetas: string[];

                        /** DmWebViewReply postPanelV2. */
                        public postPanelV2: bilibili.community.service.dm.v1.IPostPanelV2[];

                        /** DmWebViewReply subViews. */
                        public subViews: bilibili.community.service.dm.v1.IDmSubView[];

                        /** DmWebViewReply qoe. */
                        public qoe?: (bilibili.community.service.dm.v1.IQoeInfo|null);

                        /**
                         * Creates a new DmWebViewReply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DmWebViewReply instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.IDmWebViewReply): bilibili.community.service.dm.v1.DmWebViewReply;

                        /**
                         * Encodes the specified DmWebViewReply message. Does not implicitly {@link bilibili.community.service.dm.v1.DmWebViewReply.verify|verify} messages.
                         * @param message DmWebViewReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.IDmWebViewReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DmWebViewReply message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DmWebViewReply.verify|verify} messages.
                         * @param message DmWebViewReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.IDmWebViewReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DmWebViewReply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DmWebViewReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.DmWebViewReply;

                        /**
                         * Decodes a DmWebViewReply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DmWebViewReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.DmWebViewReply;

                        /**
                         * Verifies a DmWebViewReply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DmWebViewReply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DmWebViewReply
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.DmWebViewReply;

                        /**
                         * Creates a plain object from a DmWebViewReply message. Also converts values to other types if specified.
                         * @param message DmWebViewReply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.DmWebViewReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DmWebViewReply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DmWebViewReply
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a QoeInfo. */
                    interface IQoeInfo {

                        /** QoeInfo info */
                        info?: (string|null);
                    }

                    /** Represents a QoeInfo. */
                    class QoeInfo implements IQoeInfo {

                        /**
                         * Constructs a new QoeInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IQoeInfo);

                        /** QoeInfo info. */
                        public info: string;

                        /**
                         * Creates a new QoeInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns QoeInfo instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.IQoeInfo): bilibili.community.service.dm.v1.QoeInfo;

                        /**
                         * Encodes the specified QoeInfo message. Does not implicitly {@link bilibili.community.service.dm.v1.QoeInfo.verify|verify} messages.
                         * @param message QoeInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.IQoeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified QoeInfo message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.QoeInfo.verify|verify} messages.
                         * @param message QoeInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.IQoeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a QoeInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns QoeInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.QoeInfo;

                        /**
                         * Decodes a QoeInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns QoeInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.QoeInfo;

                        /**
                         * Verifies a QoeInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a QoeInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns QoeInfo
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.QoeInfo;

                        /**
                         * Creates a plain object from a QoeInfo message. Also converts values to other types if specified.
                         * @param message QoeInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.QoeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this QoeInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for QoeInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PostPanel. */
                    interface IPostPanel {

                        /** PostPanel start */
                        start?: (number|Long|null);

                        /** PostPanel end */
                        end?: (number|Long|null);

                        /** PostPanel priority */
                        priority?: (number|Long|null);

                        /** PostPanel bizId */
                        bizId?: (number|Long|null);

                        /** PostPanel bizType */
                        bizType?: (bilibili.community.service.dm.v1.PostPanelBizType|null);

                        /** PostPanel clickButton */
                        clickButton?: (bilibili.community.service.dm.v1.IClickButton|null);

                        /** PostPanel textInput */
                        textInput?: (bilibili.community.service.dm.v1.ITextInput|null);

                        /** PostPanel checkBox */
                        checkBox?: (bilibili.community.service.dm.v1.ICheckBox|null);

                        /** PostPanel toast */
                        toast?: (bilibili.community.service.dm.v1.IToast|null);
                    }

                    /** Represents a PostPanel. */
                    class PostPanel implements IPostPanel {

                        /**
                         * Constructs a new PostPanel.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IPostPanel);

                        /** PostPanel start. */
                        public start: (number|Long);

                        /** PostPanel end. */
                        public end: (number|Long);

                        /** PostPanel priority. */
                        public priority: (number|Long);

                        /** PostPanel bizId. */
                        public bizId: (number|Long);

                        /** PostPanel bizType. */
                        public bizType: bilibili.community.service.dm.v1.PostPanelBizType;

                        /** PostPanel clickButton. */
                        public clickButton?: (bilibili.community.service.dm.v1.IClickButton|null);

                        /** PostPanel textInput. */
                        public textInput?: (bilibili.community.service.dm.v1.ITextInput|null);

                        /** PostPanel checkBox. */
                        public checkBox?: (bilibili.community.service.dm.v1.ICheckBox|null);

                        /** PostPanel toast. */
                        public toast?: (bilibili.community.service.dm.v1.IToast|null);

                        /**
                         * Creates a new PostPanel instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PostPanel instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.IPostPanel): bilibili.community.service.dm.v1.PostPanel;

                        /**
                         * Encodes the specified PostPanel message. Does not implicitly {@link bilibili.community.service.dm.v1.PostPanel.verify|verify} messages.
                         * @param message PostPanel message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.IPostPanel, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PostPanel message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PostPanel.verify|verify} messages.
                         * @param message PostPanel message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.IPostPanel, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PostPanel message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PostPanel
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.PostPanel;

                        /**
                         * Decodes a PostPanel message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PostPanel
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.PostPanel;

                        /**
                         * Verifies a PostPanel message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PostPanel message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PostPanel
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.PostPanel;

                        /**
                         * Creates a plain object from a PostPanel message. Also converts values to other types if specified.
                         * @param message PostPanel
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.PostPanel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PostPanel to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PostPanel
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a PostPanelV2. */
                    interface IPostPanelV2 {

                        /** PostPanelV2 start */
                        start?: (number|Long|null);

                        /** PostPanelV2 end */
                        end?: (number|Long|null);

                        /** PostPanelV2 bizType */
                        bizType?: (bilibili.community.service.dm.v1.PostPanelBizType|null);

                        /** PostPanelV2 clickButton */
                        clickButton?: (bilibili.community.service.dm.v1.IClickButtonV2|null);

                        /** PostPanelV2 textInput */
                        textInput?: (bilibili.community.service.dm.v1.ITextInputV2|null);

                        /** PostPanelV2 checkBox */
                        checkBox?: (bilibili.community.service.dm.v1.ICheckBoxV2|null);

                        /** PostPanelV2 toast */
                        toast?: (bilibili.community.service.dm.v1.IToastV2|null);

                        /** PostPanelV2 bubble */
                        bubble?: (bilibili.community.service.dm.v1.IBubbleV2|null);

                        /** PostPanelV2 label */
                        label?: (bilibili.community.service.dm.v1.ILabelV2|null);

                        /** PostPanelV2 postStatus */
                        postStatus?: (bilibili.community.service.dm.v1.PostStatus|null);
                    }

                    /** Represents a PostPanelV2. */
                    class PostPanelV2 implements IPostPanelV2 {

                        /**
                         * Constructs a new PostPanelV2.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IPostPanelV2);

                        /** PostPanelV2 start. */
                        public start: (number|Long);

                        /** PostPanelV2 end. */
                        public end: (number|Long);

                        /** PostPanelV2 bizType. */
                        public bizType: bilibili.community.service.dm.v1.PostPanelBizType;

                        /** PostPanelV2 clickButton. */
                        public clickButton?: (bilibili.community.service.dm.v1.IClickButtonV2|null);

                        /** PostPanelV2 textInput. */
                        public textInput?: (bilibili.community.service.dm.v1.ITextInputV2|null);

                        /** PostPanelV2 checkBox. */
                        public checkBox?: (bilibili.community.service.dm.v1.ICheckBoxV2|null);

                        /** PostPanelV2 toast. */
                        public toast?: (bilibili.community.service.dm.v1.IToastV2|null);

                        /** PostPanelV2 bubble. */
                        public bubble?: (bilibili.community.service.dm.v1.IBubbleV2|null);

                        /** PostPanelV2 label. */
                        public label?: (bilibili.community.service.dm.v1.ILabelV2|null);

                        /** PostPanelV2 postStatus. */
                        public postStatus: bilibili.community.service.dm.v1.PostStatus;

                        /**
                         * Creates a new PostPanelV2 instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PostPanelV2 instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.IPostPanelV2): bilibili.community.service.dm.v1.PostPanelV2;

                        /**
                         * Encodes the specified PostPanelV2 message. Does not implicitly {@link bilibili.community.service.dm.v1.PostPanelV2.verify|verify} messages.
                         * @param message PostPanelV2 message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.IPostPanelV2, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PostPanelV2 message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.PostPanelV2.verify|verify} messages.
                         * @param message PostPanelV2 message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.IPostPanelV2, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PostPanelV2 message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PostPanelV2
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.PostPanelV2;

                        /**
                         * Decodes a PostPanelV2 message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PostPanelV2
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.PostPanelV2;

                        /**
                         * Verifies a PostPanelV2 message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PostPanelV2 message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PostPanelV2
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.PostPanelV2;

                        /**
                         * Creates a plain object from a PostPanelV2 message. Also converts values to other types if specified.
                         * @param message PostPanelV2
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.PostPanelV2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PostPanelV2 to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PostPanelV2
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ClickButton. */
                    interface IClickButton {

                        /** ClickButton portraitText */
                        portraitText?: (string[]|null);

                        /** ClickButton landscapeText */
                        landscapeText?: (string[]|null);

                        /** ClickButton portraitTextFocus */
                        portraitTextFocus?: (string[]|null);

                        /** ClickButton landscapeTextFocus */
                        landscapeTextFocus?: (string[]|null);

                        /** ClickButton renderType */
                        renderType?: (bilibili.community.service.dm.v1.RenderType|null);

                        /** ClickButton show */
                        show?: (boolean|null);
                    }

                    /** Represents a ClickButton. */
                    class ClickButton implements IClickButton {

                        /**
                         * Constructs a new ClickButton.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IClickButton);

                        /** ClickButton portraitText. */
                        public portraitText: string[];

                        /** ClickButton landscapeText. */
                        public landscapeText: string[];

                        /** ClickButton portraitTextFocus. */
                        public portraitTextFocus: string[];

                        /** ClickButton landscapeTextFocus. */
                        public landscapeTextFocus: string[];

                        /** ClickButton renderType. */
                        public renderType: bilibili.community.service.dm.v1.RenderType;

                        /** ClickButton show. */
                        public show: boolean;

                        /**
                         * Creates a new ClickButton instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ClickButton instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.IClickButton): bilibili.community.service.dm.v1.ClickButton;

                        /**
                         * Encodes the specified ClickButton message. Does not implicitly {@link bilibili.community.service.dm.v1.ClickButton.verify|verify} messages.
                         * @param message ClickButton message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.IClickButton, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ClickButton message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.ClickButton.verify|verify} messages.
                         * @param message ClickButton message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.IClickButton, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ClickButton message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ClickButton
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.ClickButton;

                        /**
                         * Decodes a ClickButton message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ClickButton
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.ClickButton;

                        /**
                         * Verifies a ClickButton message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ClickButton message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ClickButton
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.ClickButton;

                        /**
                         * Creates a plain object from a ClickButton message. Also converts values to other types if specified.
                         * @param message ClickButton
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.ClickButton, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ClickButton to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ClickButton
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ClickButtonV2. */
                    interface IClickButtonV2 {

                        /** ClickButtonV2 portraitText */
                        portraitText?: (string[]|null);

                        /** ClickButtonV2 landscapeText */
                        landscapeText?: (string[]|null);

                        /** ClickButtonV2 portraitTextFocus */
                        portraitTextFocus?: (string[]|null);

                        /** ClickButtonV2 landscapeTextFocus */
                        landscapeTextFocus?: (string[]|null);

                        /** ClickButtonV2 renderType */
                        renderType?: (bilibili.community.service.dm.v1.RenderType|null);

                        /** ClickButtonV2 textInputPost */
                        textInputPost?: (boolean|null);

                        /** ClickButtonV2 exposureOnce */
                        exposureOnce?: (boolean|null);

                        /** ClickButtonV2 exposureType */
                        exposureType?: (bilibili.community.service.dm.v1.ExposureType|null);
                    }

                    /** Represents a ClickButtonV2. */
                    class ClickButtonV2 implements IClickButtonV2 {

                        /**
                         * Constructs a new ClickButtonV2.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IClickButtonV2);

                        /** ClickButtonV2 portraitText. */
                        public portraitText: string[];

                        /** ClickButtonV2 landscapeText. */
                        public landscapeText: string[];

                        /** ClickButtonV2 portraitTextFocus. */
                        public portraitTextFocus: string[];

                        /** ClickButtonV2 landscapeTextFocus. */
                        public landscapeTextFocus: string[];

                        /** ClickButtonV2 renderType. */
                        public renderType: bilibili.community.service.dm.v1.RenderType;

                        /** ClickButtonV2 textInputPost. */
                        public textInputPost: boolean;

                        /** ClickButtonV2 exposureOnce. */
                        public exposureOnce: boolean;

                        /** ClickButtonV2 exposureType. */
                        public exposureType: bilibili.community.service.dm.v1.ExposureType;

                        /**
                         * Creates a new ClickButtonV2 instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ClickButtonV2 instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.IClickButtonV2): bilibili.community.service.dm.v1.ClickButtonV2;

                        /**
                         * Encodes the specified ClickButtonV2 message. Does not implicitly {@link bilibili.community.service.dm.v1.ClickButtonV2.verify|verify} messages.
                         * @param message ClickButtonV2 message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.IClickButtonV2, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ClickButtonV2 message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.ClickButtonV2.verify|verify} messages.
                         * @param message ClickButtonV2 message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.IClickButtonV2, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ClickButtonV2 message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ClickButtonV2
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.ClickButtonV2;

                        /**
                         * Decodes a ClickButtonV2 message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ClickButtonV2
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.ClickButtonV2;

                        /**
                         * Verifies a ClickButtonV2 message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ClickButtonV2 message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ClickButtonV2
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.ClickButtonV2;

                        /**
                         * Creates a plain object from a ClickButtonV2 message. Also converts values to other types if specified.
                         * @param message ClickButtonV2
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.ClickButtonV2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ClickButtonV2 to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ClickButtonV2
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** PostPanelBizType enum. */
                    enum PostPanelBizType {
                        PostPanelBizTypeNone = 0,
                        PostPanelBizTypeEncourage = 1,
                        PostPanelBizTypeFragClose = 4,
                        PostPanelBizTypeColorDM = 2
                    }

                    /** Properties of a TextInput. */
                    interface ITextInput {

                        /** TextInput portraitPlaceholder */
                        portraitPlaceholder?: (string[]|null);

                        /** TextInput landscapePlaceholder */
                        landscapePlaceholder?: (string[]|null);

                        /** TextInput renderType */
                        renderType?: (bilibili.community.service.dm.v1.RenderType|null);

                        /** TextInput placeholderPost */
                        placeholderPost?: (boolean|null);

                        /** TextInput show */
                        show?: (boolean|null);

                        /** TextInput postStatus */
                        postStatus?: (bilibili.community.service.dm.v1.PostStatus|null);
                    }

                    /** Represents a TextInput. */
                    class TextInput implements ITextInput {

                        /**
                         * Constructs a new TextInput.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.ITextInput);

                        /** TextInput portraitPlaceholder. */
                        public portraitPlaceholder: string[];

                        /** TextInput landscapePlaceholder. */
                        public landscapePlaceholder: string[];

                        /** TextInput renderType. */
                        public renderType: bilibili.community.service.dm.v1.RenderType;

                        /** TextInput placeholderPost. */
                        public placeholderPost: boolean;

                        /** TextInput show. */
                        public show: boolean;

                        /** TextInput postStatus. */
                        public postStatus: bilibili.community.service.dm.v1.PostStatus;

                        /**
                         * Creates a new TextInput instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TextInput instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.ITextInput): bilibili.community.service.dm.v1.TextInput;

                        /**
                         * Encodes the specified TextInput message. Does not implicitly {@link bilibili.community.service.dm.v1.TextInput.verify|verify} messages.
                         * @param message TextInput message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.ITextInput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TextInput message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.TextInput.verify|verify} messages.
                         * @param message TextInput message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.ITextInput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TextInput message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TextInput
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.TextInput;

                        /**
                         * Decodes a TextInput message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TextInput
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.TextInput;

                        /**
                         * Verifies a TextInput message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TextInput message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TextInput
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.TextInput;

                        /**
                         * Creates a plain object from a TextInput message. Also converts values to other types if specified.
                         * @param message TextInput
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.TextInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TextInput to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TextInput
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TextInputV2. */
                    interface ITextInputV2 {

                        /** TextInputV2 portraitPlaceholder */
                        portraitPlaceholder?: (string[]|null);

                        /** TextInputV2 landscapePlaceholder */
                        landscapePlaceholder?: (string[]|null);

                        /** TextInputV2 renderType */
                        renderType?: (bilibili.community.service.dm.v1.RenderType|null);

                        /** TextInputV2 placeholderPost */
                        placeholderPost?: (boolean|null);

                        /** TextInputV2 textInputLimit */
                        textInputLimit?: (number|null);
                    }

                    /** Represents a TextInputV2. */
                    class TextInputV2 implements ITextInputV2 {

                        /**
                         * Constructs a new TextInputV2.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.ITextInputV2);

                        /** TextInputV2 portraitPlaceholder. */
                        public portraitPlaceholder: string[];

                        /** TextInputV2 landscapePlaceholder. */
                        public landscapePlaceholder: string[];

                        /** TextInputV2 renderType. */
                        public renderType: bilibili.community.service.dm.v1.RenderType;

                        /** TextInputV2 placeholderPost. */
                        public placeholderPost: boolean;

                        /** TextInputV2 textInputLimit. */
                        public textInputLimit: number;

                        /**
                         * Creates a new TextInputV2 instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TextInputV2 instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.ITextInputV2): bilibili.community.service.dm.v1.TextInputV2;

                        /**
                         * Encodes the specified TextInputV2 message. Does not implicitly {@link bilibili.community.service.dm.v1.TextInputV2.verify|verify} messages.
                         * @param message TextInputV2 message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.ITextInputV2, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TextInputV2 message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.TextInputV2.verify|verify} messages.
                         * @param message TextInputV2 message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.ITextInputV2, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TextInputV2 message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TextInputV2
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.TextInputV2;

                        /**
                         * Decodes a TextInputV2 message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TextInputV2
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.TextInputV2;

                        /**
                         * Verifies a TextInputV2 message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TextInputV2 message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TextInputV2
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.TextInputV2;

                        /**
                         * Creates a plain object from a TextInputV2 message. Also converts values to other types if specified.
                         * @param message TextInputV2
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.TextInputV2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TextInputV2 to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TextInputV2
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** PostStatus enum. */
                    enum PostStatus {
                        PostStatusNormal = 0,
                        PostStatusClosed = 1
                    }

                    /** RenderType enum. */
                    enum RenderType {
                        RenderTypeNone = 0,
                        RenderTypeSingle = 1,
                        RenderTypeRotation = 2
                    }

                    /** Properties of a CheckBox. */
                    interface ICheckBox {

                        /** CheckBox text */
                        text?: (string|null);

                        /** CheckBox type */
                        type?: (bilibili.community.service.dm.v1.CheckboxType|null);

                        /** CheckBox defaultValue */
                        defaultValue?: (boolean|null);

                        /** CheckBox show */
                        show?: (boolean|null);
                    }

                    /** Represents a CheckBox. */
                    class CheckBox implements ICheckBox {

                        /**
                         * Constructs a new CheckBox.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.ICheckBox);

                        /** CheckBox text. */
                        public text: string;

                        /** CheckBox type. */
                        public type: bilibili.community.service.dm.v1.CheckboxType;

                        /** CheckBox defaultValue. */
                        public defaultValue: boolean;

                        /** CheckBox show. */
                        public show: boolean;

                        /**
                         * Creates a new CheckBox instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CheckBox instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.ICheckBox): bilibili.community.service.dm.v1.CheckBox;

                        /**
                         * Encodes the specified CheckBox message. Does not implicitly {@link bilibili.community.service.dm.v1.CheckBox.verify|verify} messages.
                         * @param message CheckBox message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.ICheckBox, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CheckBox message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.CheckBox.verify|verify} messages.
                         * @param message CheckBox message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.ICheckBox, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CheckBox message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CheckBox
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.CheckBox;

                        /**
                         * Decodes a CheckBox message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CheckBox
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.CheckBox;

                        /**
                         * Verifies a CheckBox message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CheckBox message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CheckBox
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.CheckBox;

                        /**
                         * Creates a plain object from a CheckBox message. Also converts values to other types if specified.
                         * @param message CheckBox
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.CheckBox, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CheckBox to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CheckBox
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CheckBoxV2. */
                    interface ICheckBoxV2 {

                        /** CheckBoxV2 text */
                        text?: (string|null);

                        /** CheckBoxV2 type */
                        type?: (bilibili.community.service.dm.v1.CheckboxType|null);

                        /** CheckBoxV2 defaultValue */
                        defaultValue?: (boolean|null);
                    }

                    /** Represents a CheckBoxV2. */
                    class CheckBoxV2 implements ICheckBoxV2 {

                        /**
                         * Constructs a new CheckBoxV2.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.ICheckBoxV2);

                        /** CheckBoxV2 text. */
                        public text: string;

                        /** CheckBoxV2 type. */
                        public type: bilibili.community.service.dm.v1.CheckboxType;

                        /** CheckBoxV2 defaultValue. */
                        public defaultValue: boolean;

                        /**
                         * Creates a new CheckBoxV2 instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CheckBoxV2 instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.ICheckBoxV2): bilibili.community.service.dm.v1.CheckBoxV2;

                        /**
                         * Encodes the specified CheckBoxV2 message. Does not implicitly {@link bilibili.community.service.dm.v1.CheckBoxV2.verify|verify} messages.
                         * @param message CheckBoxV2 message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.ICheckBoxV2, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CheckBoxV2 message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.CheckBoxV2.verify|verify} messages.
                         * @param message CheckBoxV2 message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.ICheckBoxV2, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CheckBoxV2 message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CheckBoxV2
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.CheckBoxV2;

                        /**
                         * Decodes a CheckBoxV2 message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CheckBoxV2
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.CheckBoxV2;

                        /**
                         * Verifies a CheckBoxV2 message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CheckBoxV2 message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CheckBoxV2
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.CheckBoxV2;

                        /**
                         * Creates a plain object from a CheckBoxV2 message. Also converts values to other types if specified.
                         * @param message CheckBoxV2
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.CheckBoxV2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CheckBoxV2 to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CheckBoxV2
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** CheckboxType enum. */
                    enum CheckboxType {
                        CheckboxTypeNone = 0,
                        CheckboxTypeEncourage = 1
                    }

                    /** Properties of a Toast. */
                    interface IToast {

                        /** Toast text */
                        text?: (string|null);

                        /** Toast duration */
                        duration?: (number|null);

                        /** Toast show */
                        show?: (boolean|null);

                        /** Toast button */
                        button?: (bilibili.community.service.dm.v1.IButton|null);
                    }

                    /** Represents a Toast. */
                    class Toast implements IToast {

                        /**
                         * Constructs a new Toast.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IToast);

                        /** Toast text. */
                        public text: string;

                        /** Toast duration. */
                        public duration: number;

                        /** Toast show. */
                        public show: boolean;

                        /** Toast button. */
                        public button?: (bilibili.community.service.dm.v1.IButton|null);

                        /**
                         * Creates a new Toast instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Toast instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.IToast): bilibili.community.service.dm.v1.Toast;

                        /**
                         * Encodes the specified Toast message. Does not implicitly {@link bilibili.community.service.dm.v1.Toast.verify|verify} messages.
                         * @param message Toast message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.IToast, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Toast message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.Toast.verify|verify} messages.
                         * @param message Toast message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.IToast, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Toast message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Toast
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.Toast;

                        /**
                         * Decodes a Toast message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Toast
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.Toast;

                        /**
                         * Verifies a Toast message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Toast message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Toast
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.Toast;

                        /**
                         * Creates a plain object from a Toast message. Also converts values to other types if specified.
                         * @param message Toast
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.Toast, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Toast to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Toast
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ToastV2. */
                    interface IToastV2 {

                        /** ToastV2 text */
                        text?: (string|null);

                        /** ToastV2 duration */
                        duration?: (number|null);

                        /** ToastV2 toastButtonV2 */
                        toastButtonV2?: (bilibili.community.service.dm.v1.IToastButtonV2|null);
                    }

                    /** Represents a ToastV2. */
                    class ToastV2 implements IToastV2 {

                        /**
                         * Constructs a new ToastV2.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IToastV2);

                        /** ToastV2 text. */
                        public text: string;

                        /** ToastV2 duration. */
                        public duration: number;

                        /** ToastV2 toastButtonV2. */
                        public toastButtonV2?: (bilibili.community.service.dm.v1.IToastButtonV2|null);

                        /**
                         * Creates a new ToastV2 instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ToastV2 instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.IToastV2): bilibili.community.service.dm.v1.ToastV2;

                        /**
                         * Encodes the specified ToastV2 message. Does not implicitly {@link bilibili.community.service.dm.v1.ToastV2.verify|verify} messages.
                         * @param message ToastV2 message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.IToastV2, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ToastV2 message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.ToastV2.verify|verify} messages.
                         * @param message ToastV2 message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.IToastV2, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ToastV2 message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ToastV2
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.ToastV2;

                        /**
                         * Decodes a ToastV2 message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ToastV2
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.ToastV2;

                        /**
                         * Verifies a ToastV2 message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ToastV2 message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ToastV2
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.ToastV2;

                        /**
                         * Creates a plain object from a ToastV2 message. Also converts values to other types if specified.
                         * @param message ToastV2
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.ToastV2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ToastV2 to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ToastV2
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BubbleV2. */
                    interface IBubbleV2 {

                        /** BubbleV2 text */
                        text?: (string|null);

                        /** BubbleV2 url */
                        url?: (string|null);

                        /** BubbleV2 bubbleType */
                        bubbleType?: (bilibili.community.service.dm.v1.BubbleType|null);

                        /** BubbleV2 exposureOnce */
                        exposureOnce?: (boolean|null);

                        /** BubbleV2 exposureType */
                        exposureType?: (bilibili.community.service.dm.v1.ExposureType|null);
                    }

                    /** Represents a BubbleV2. */
                    class BubbleV2 implements IBubbleV2 {

                        /**
                         * Constructs a new BubbleV2.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IBubbleV2);

                        /** BubbleV2 text. */
                        public text: string;

                        /** BubbleV2 url. */
                        public url: string;

                        /** BubbleV2 bubbleType. */
                        public bubbleType: bilibili.community.service.dm.v1.BubbleType;

                        /** BubbleV2 exposureOnce. */
                        public exposureOnce: boolean;

                        /** BubbleV2 exposureType. */
                        public exposureType: bilibili.community.service.dm.v1.ExposureType;

                        /**
                         * Creates a new BubbleV2 instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BubbleV2 instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.IBubbleV2): bilibili.community.service.dm.v1.BubbleV2;

                        /**
                         * Encodes the specified BubbleV2 message. Does not implicitly {@link bilibili.community.service.dm.v1.BubbleV2.verify|verify} messages.
                         * @param message BubbleV2 message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.IBubbleV2, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BubbleV2 message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.BubbleV2.verify|verify} messages.
                         * @param message BubbleV2 message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.IBubbleV2, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BubbleV2 message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BubbleV2
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.BubbleV2;

                        /**
                         * Decodes a BubbleV2 message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BubbleV2
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.BubbleV2;

                        /**
                         * Verifies a BubbleV2 message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BubbleV2 message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BubbleV2
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.BubbleV2;

                        /**
                         * Creates a plain object from a BubbleV2 message. Also converts values to other types if specified.
                         * @param message BubbleV2
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.BubbleV2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BubbleV2 to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BubbleV2
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** BubbleType enum. */
                    enum BubbleType {
                        BubbleTypeNone = 0,
                        BubbleTypeClickButton = 1,
                        BubbleTypeDmSettingPanel = 2
                    }

                    /** Properties of a LabelV2. */
                    interface ILabelV2 {

                        /** LabelV2 title */
                        title?: (string|null);

                        /** LabelV2 content */
                        content?: (string[]|null);

                        /** LabelV2 exposureOnce */
                        exposureOnce?: (boolean|null);

                        /** LabelV2 exposureType */
                        exposureType?: (bilibili.community.service.dm.v1.ExposureType|null);
                    }

                    /** Represents a LabelV2. */
                    class LabelV2 implements ILabelV2 {

                        /**
                         * Constructs a new LabelV2.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.ILabelV2);

                        /** LabelV2 title. */
                        public title: string;

                        /** LabelV2 content. */
                        public content: string[];

                        /** LabelV2 exposureOnce. */
                        public exposureOnce: boolean;

                        /** LabelV2 exposureType. */
                        public exposureType: bilibili.community.service.dm.v1.ExposureType;

                        /**
                         * Creates a new LabelV2 instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LabelV2 instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.ILabelV2): bilibili.community.service.dm.v1.LabelV2;

                        /**
                         * Encodes the specified LabelV2 message. Does not implicitly {@link bilibili.community.service.dm.v1.LabelV2.verify|verify} messages.
                         * @param message LabelV2 message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.ILabelV2, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LabelV2 message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.LabelV2.verify|verify} messages.
                         * @param message LabelV2 message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.ILabelV2, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LabelV2 message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LabelV2
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.LabelV2;

                        /**
                         * Decodes a LabelV2 message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LabelV2
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.LabelV2;

                        /**
                         * Verifies a LabelV2 message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LabelV2 message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LabelV2
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.LabelV2;

                        /**
                         * Creates a plain object from a LabelV2 message. Also converts values to other types if specified.
                         * @param message LabelV2
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.LabelV2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LabelV2 to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for LabelV2
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** ExposureType enum. */
                    enum ExposureType {
                        ExposureTypeNone = 0,
                        ExposureTypeDMSend = 1
                    }

                    /** Properties of a ToastButtonV2. */
                    interface IToastButtonV2 {

                        /** ToastButtonV2 text */
                        text?: (string|null);

                        /** ToastButtonV2 action */
                        action?: (bilibili.community.service.dm.v1.ToastFunctionType|null);
                    }

                    /** Represents a ToastButtonV2. */
                    class ToastButtonV2 implements IToastButtonV2 {

                        /**
                         * Constructs a new ToastButtonV2.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IToastButtonV2);

                        /** ToastButtonV2 text. */
                        public text: string;

                        /** ToastButtonV2 action. */
                        public action: bilibili.community.service.dm.v1.ToastFunctionType;

                        /**
                         * Creates a new ToastButtonV2 instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ToastButtonV2 instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.IToastButtonV2): bilibili.community.service.dm.v1.ToastButtonV2;

                        /**
                         * Encodes the specified ToastButtonV2 message. Does not implicitly {@link bilibili.community.service.dm.v1.ToastButtonV2.verify|verify} messages.
                         * @param message ToastButtonV2 message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.IToastButtonV2, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ToastButtonV2 message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.ToastButtonV2.verify|verify} messages.
                         * @param message ToastButtonV2 message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.IToastButtonV2, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ToastButtonV2 message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ToastButtonV2
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.ToastButtonV2;

                        /**
                         * Decodes a ToastButtonV2 message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ToastButtonV2
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.ToastButtonV2;

                        /**
                         * Verifies a ToastButtonV2 message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ToastButtonV2 message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ToastButtonV2
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.ToastButtonV2;

                        /**
                         * Creates a plain object from a ToastButtonV2 message. Also converts values to other types if specified.
                         * @param message ToastButtonV2
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.ToastButtonV2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ToastButtonV2 to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ToastButtonV2
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Button. */
                    interface IButton {

                        /** Button text */
                        text?: (string|null);

                        /** Button action */
                        action?: (bilibili.community.service.dm.v1.ToastFunctionType|null);
                    }

                    /** Represents a Button. */
                    class Button implements IButton {

                        /**
                         * Constructs a new Button.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IButton);

                        /** Button text. */
                        public text: string;

                        /** Button action. */
                        public action: bilibili.community.service.dm.v1.ToastFunctionType;

                        /**
                         * Creates a new Button instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Button instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.IButton): bilibili.community.service.dm.v1.Button;

                        /**
                         * Encodes the specified Button message. Does not implicitly {@link bilibili.community.service.dm.v1.Button.verify|verify} messages.
                         * @param message Button message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.IButton, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Button message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.Button.verify|verify} messages.
                         * @param message Button message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.IButton, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Button message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Button
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.Button;

                        /**
                         * Decodes a Button message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Button
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.Button;

                        /**
                         * Verifies a Button message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Button message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Button
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.Button;

                        /**
                         * Creates a plain object from a Button message. Also converts values to other types if specified.
                         * @param message Button
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.Button, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Button to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Button
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** ToastFunctionType enum. */
                    enum ToastFunctionType {
                        ToastFunctionTypeNone = 0,
                        ToastFunctionTypePostPanel = 1
                    }

                    /** ToastBizType enum. */
                    enum ToastBizType {
                        ToastBizTypeNone = 0,
                        ToastBizTypeEncourage = 1
                    }

                    /** Properties of a CommandDm. */
                    interface ICommandDm {

                        /** CommandDm oid */
                        oid?: (number|Long|null);

                        /** CommandDm mid */
                        mid?: (number|Long|null);

                        /** CommandDm command */
                        command?: (string|null);

                        /** CommandDm text */
                        text?: (string|null);

                        /** CommandDm stime */
                        stime?: (number|null);

                        /** CommandDm ctime */
                        ctime?: (string|null);

                        /** CommandDm mtime */
                        mtime?: (string|null);

                        /** CommandDm extra */
                        extra?: (string|null);

                        /** CommandDm dmid */
                        dmid?: (string|null);
                    }

                    /** Represents a CommandDm. */
                    class CommandDm implements ICommandDm {

                        /**
                         * Constructs a new CommandDm.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.ICommandDm);

                        /** CommandDm oid. */
                        public oid: (number|Long);

                        /** CommandDm mid. */
                        public mid: (number|Long);

                        /** CommandDm command. */
                        public command: string;

                        /** CommandDm text. */
                        public text: string;

                        /** CommandDm stime. */
                        public stime: number;

                        /** CommandDm ctime. */
                        public ctime: string;

                        /** CommandDm mtime. */
                        public mtime: string;

                        /** CommandDm extra. */
                        public extra: string;

                        /** CommandDm dmid. */
                        public dmid: string;

                        /**
                         * Creates a new CommandDm instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CommandDm instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.ICommandDm): bilibili.community.service.dm.v1.CommandDm;

                        /**
                         * Encodes the specified CommandDm message. Does not implicitly {@link bilibili.community.service.dm.v1.CommandDm.verify|verify} messages.
                         * @param message CommandDm message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.ICommandDm, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CommandDm message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.CommandDm.verify|verify} messages.
                         * @param message CommandDm message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.ICommandDm, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CommandDm message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CommandDm
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.CommandDm;

                        /**
                         * Decodes a CommandDm message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CommandDm
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.CommandDm;

                        /**
                         * Verifies a CommandDm message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CommandDm message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CommandDm
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.CommandDm;

                        /**
                         * Creates a plain object from a CommandDm message. Also converts values to other types if specified.
                         * @param message CommandDm
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.CommandDm, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CommandDm to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CommandDm
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DmSegConfig. */
                    interface IDmSegConfig {

                        /** DmSegConfig pageSize */
                        pageSize?: (number|Long|null);

                        /** DmSegConfig total */
                        total?: (number|Long|null);
                    }

                    /** Represents a DmSegConfig. */
                    class DmSegConfig implements IDmSegConfig {

                        /**
                         * Constructs a new DmSegConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IDmSegConfig);

                        /** DmSegConfig pageSize. */
                        public pageSize: (number|Long);

                        /** DmSegConfig total. */
                        public total: (number|Long);

                        /**
                         * Creates a new DmSegConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DmSegConfig instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.IDmSegConfig): bilibili.community.service.dm.v1.DmSegConfig;

                        /**
                         * Encodes the specified DmSegConfig message. Does not implicitly {@link bilibili.community.service.dm.v1.DmSegConfig.verify|verify} messages.
                         * @param message DmSegConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.IDmSegConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DmSegConfig message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DmSegConfig.verify|verify} messages.
                         * @param message DmSegConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.IDmSegConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DmSegConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DmSegConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.DmSegConfig;

                        /**
                         * Decodes a DmSegConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DmSegConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.DmSegConfig;

                        /**
                         * Verifies a DmSegConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DmSegConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DmSegConfig
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.DmSegConfig;

                        /**
                         * Creates a plain object from a DmSegConfig message. Also converts values to other types if specified.
                         * @param message DmSegConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.DmSegConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DmSegConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DmSegConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DanmakuFlagConfig. */
                    interface IDanmakuFlagConfig {

                        /** DanmakuFlagConfig recFlag */
                        recFlag?: (number|null);

                        /** DanmakuFlagConfig recText */
                        recText?: (string|null);

                        /** DanmakuFlagConfig recSwitch */
                        recSwitch?: (number|null);
                    }

                    /** Represents a DanmakuFlagConfig. */
                    class DanmakuFlagConfig implements IDanmakuFlagConfig {

                        /**
                         * Constructs a new DanmakuFlagConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IDanmakuFlagConfig);

                        /** DanmakuFlagConfig recFlag. */
                        public recFlag: number;

                        /** DanmakuFlagConfig recText. */
                        public recText: string;

                        /** DanmakuFlagConfig recSwitch. */
                        public recSwitch: number;

                        /**
                         * Creates a new DanmakuFlagConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DanmakuFlagConfig instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.IDanmakuFlagConfig): bilibili.community.service.dm.v1.DanmakuFlagConfig;

                        /**
                         * Encodes the specified DanmakuFlagConfig message. Does not implicitly {@link bilibili.community.service.dm.v1.DanmakuFlagConfig.verify|verify} messages.
                         * @param message DanmakuFlagConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.IDanmakuFlagConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DanmakuFlagConfig message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DanmakuFlagConfig.verify|verify} messages.
                         * @param message DanmakuFlagConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.IDanmakuFlagConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DanmakuFlagConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DanmakuFlagConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.DanmakuFlagConfig;

                        /**
                         * Decodes a DanmakuFlagConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DanmakuFlagConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.DanmakuFlagConfig;

                        /**
                         * Verifies a DanmakuFlagConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DanmakuFlagConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DanmakuFlagConfig
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.DanmakuFlagConfig;

                        /**
                         * Creates a plain object from a DanmakuFlagConfig message. Also converts values to other types if specified.
                         * @param message DanmakuFlagConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.DanmakuFlagConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DanmakuFlagConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DanmakuFlagConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DmSegMobileReply. */
                    interface IDmSegMobileReply {

                        /** DmSegMobileReply elems */
                        elems?: (bilibili.community.service.dm.v1.IDanmakuElem[]|null);

                        /** DmSegMobileReply colorfulSrc */
                        colorfulSrc?: (bilibili.community.service.dm.v1.IDmColorful[]|null);
                    }

                    /** Represents a DmSegMobileReply. */
                    class DmSegMobileReply implements IDmSegMobileReply {

                        /**
                         * Constructs a new DmSegMobileReply.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IDmSegMobileReply);

                        /** DmSegMobileReply elems. */
                        public elems: bilibili.community.service.dm.v1.IDanmakuElem[];

                        /** DmSegMobileReply colorfulSrc. */
                        public colorfulSrc: bilibili.community.service.dm.v1.IDmColorful[];

                        /**
                         * Creates a new DmSegMobileReply instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DmSegMobileReply instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.IDmSegMobileReply): bilibili.community.service.dm.v1.DmSegMobileReply;

                        /**
                         * Encodes the specified DmSegMobileReply message. Does not implicitly {@link bilibili.community.service.dm.v1.DmSegMobileReply.verify|verify} messages.
                         * @param message DmSegMobileReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.IDmSegMobileReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DmSegMobileReply message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DmSegMobileReply.verify|verify} messages.
                         * @param message DmSegMobileReply message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.IDmSegMobileReply, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DmSegMobileReply message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DmSegMobileReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.DmSegMobileReply;

                        /**
                         * Decodes a DmSegMobileReply message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DmSegMobileReply
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.DmSegMobileReply;

                        /**
                         * Verifies a DmSegMobileReply message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DmSegMobileReply message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DmSegMobileReply
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.DmSegMobileReply;

                        /**
                         * Creates a plain object from a DmSegMobileReply message. Also converts values to other types if specified.
                         * @param message DmSegMobileReply
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.DmSegMobileReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DmSegMobileReply to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DmSegMobileReply
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DanmakuElem. */
                    interface IDanmakuElem {

                        /** DanmakuElem stime */
                        stime?: (number|null);

                        /** DanmakuElem mode */
                        mode?: (number|null);

                        /** DanmakuElem size */
                        size?: (number|null);

                        /** DanmakuElem color */
                        color?: (number|null);

                        /** DanmakuElem uhash */
                        uhash?: (string|null);

                        /** DanmakuElem text */
                        text?: (string|null);

                        /** DanmakuElem date */
                        date?: (number|Long|null);

                        /** DanmakuElem weight */
                        weight?: (number|null);

                        /** DanmakuElem action */
                        action?: (string|null);

                        /** DanmakuElem pool */
                        pool?: (number|null);

                        /** DanmakuElem dmid */
                        dmid?: (string|null);

                        /** DanmakuElem attr */
                        attr?: (number|null);

                        /** DanmakuElem animation */
                        animation?: (string|null);

                        /** DanmakuElem colorful */
                        colorful?: (bilibili.community.service.dm.v1.DmColorfulType|null);

                        /** DanmakuElem oid */
                        oid?: (number|Long|null);
                    }

                    /** Represents a DanmakuElem. */
                    class DanmakuElem implements IDanmakuElem {

                        /**
                         * Constructs a new DanmakuElem.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IDanmakuElem);

                        /** DanmakuElem stime. */
                        public stime: number;

                        /** DanmakuElem mode. */
                        public mode: number;

                        /** DanmakuElem size. */
                        public size: number;

                        /** DanmakuElem color. */
                        public color: number;

                        /** DanmakuElem uhash. */
                        public uhash: string;

                        /** DanmakuElem text. */
                        public text: string;

                        /** DanmakuElem date. */
                        public date: (number|Long);

                        /** DanmakuElem weight. */
                        public weight: number;

                        /** DanmakuElem action. */
                        public action: string;

                        /** DanmakuElem pool. */
                        public pool: number;

                        /** DanmakuElem dmid. */
                        public dmid: string;

                        /** DanmakuElem attr. */
                        public attr: number;

                        /** DanmakuElem animation. */
                        public animation: string;

                        /** DanmakuElem colorful. */
                        public colorful: bilibili.community.service.dm.v1.DmColorfulType;

                        /** DanmakuElem oid. */
                        public oid: (number|Long);

                        /**
                         * Creates a new DanmakuElem instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DanmakuElem instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.IDanmakuElem): bilibili.community.service.dm.v1.DanmakuElem;

                        /**
                         * Encodes the specified DanmakuElem message. Does not implicitly {@link bilibili.community.service.dm.v1.DanmakuElem.verify|verify} messages.
                         * @param message DanmakuElem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.IDanmakuElem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DanmakuElem message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DanmakuElem.verify|verify} messages.
                         * @param message DanmakuElem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.IDanmakuElem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DanmakuElem message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DanmakuElem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.DanmakuElem;

                        /**
                         * Decodes a DanmakuElem message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DanmakuElem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.DanmakuElem;

                        /**
                         * Verifies a DanmakuElem message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DanmakuElem message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DanmakuElem
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.DanmakuElem;

                        /**
                         * Creates a plain object from a DanmakuElem message. Also converts values to other types if specified.
                         * @param message DanmakuElem
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.DanmakuElem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DanmakuElem to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DanmakuElem
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DanmuWebPlayerConfig. */
                    interface IDanmuWebPlayerConfig {

                        /** DanmuWebPlayerConfig dmSwitch */
                        dmSwitch?: (boolean|null);

                        /** DanmuWebPlayerConfig aiSwitch */
                        aiSwitch?: (boolean|null);

                        /** DanmuWebPlayerConfig aiLevel */
                        aiLevel?: (number|null);

                        /** DanmuWebPlayerConfig typeTop */
                        typeTop?: (boolean|null);

                        /** DanmuWebPlayerConfig typeScroll */
                        typeScroll?: (boolean|null);

                        /** DanmuWebPlayerConfig typeBottom */
                        typeBottom?: (boolean|null);

                        /** DanmuWebPlayerConfig typeColor */
                        typeColor?: (boolean|null);

                        /** DanmuWebPlayerConfig typeSpecial */
                        typeSpecial?: (boolean|null);

                        /** DanmuWebPlayerConfig preventshade */
                        preventshade?: (boolean|null);

                        /** DanmuWebPlayerConfig dmask */
                        dmask?: (boolean|null);

                        /** DanmuWebPlayerConfig opacity */
                        opacity?: (number|null);

                        /** DanmuWebPlayerConfig dmarea */
                        dmarea?: (number|null);

                        /** DanmuWebPlayerConfig speedplus */
                        speedplus?: (number|null);

                        /** DanmuWebPlayerConfig fontsize */
                        fontsize?: (number|null);

                        /** DanmuWebPlayerConfig fullscreensync */
                        fullscreensync?: (boolean|null);

                        /** DanmuWebPlayerConfig speedsync */
                        speedsync?: (boolean|null);

                        /** DanmuWebPlayerConfig fontfamily */
                        fontfamily?: (string|null);

                        /** DanmuWebPlayerConfig bold */
                        bold?: (boolean|null);

                        /** DanmuWebPlayerConfig fontborder */
                        fontborder?: (number|null);

                        /** DanmuWebPlayerConfig seniorModeSwitch */
                        seniorModeSwitch?: (number|null);
                    }

                    /** Represents a DanmuWebPlayerConfig. */
                    class DanmuWebPlayerConfig implements IDanmuWebPlayerConfig {

                        /**
                         * Constructs a new DanmuWebPlayerConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IDanmuWebPlayerConfig);

                        /** DanmuWebPlayerConfig dmSwitch. */
                        public dmSwitch: boolean;

                        /** DanmuWebPlayerConfig aiSwitch. */
                        public aiSwitch: boolean;

                        /** DanmuWebPlayerConfig aiLevel. */
                        public aiLevel: number;

                        /** DanmuWebPlayerConfig typeTop. */
                        public typeTop: boolean;

                        /** DanmuWebPlayerConfig typeScroll. */
                        public typeScroll: boolean;

                        /** DanmuWebPlayerConfig typeBottom. */
                        public typeBottom: boolean;

                        /** DanmuWebPlayerConfig typeColor. */
                        public typeColor: boolean;

                        /** DanmuWebPlayerConfig typeSpecial. */
                        public typeSpecial: boolean;

                        /** DanmuWebPlayerConfig preventshade. */
                        public preventshade: boolean;

                        /** DanmuWebPlayerConfig dmask. */
                        public dmask: boolean;

                        /** DanmuWebPlayerConfig opacity. */
                        public opacity: number;

                        /** DanmuWebPlayerConfig dmarea. */
                        public dmarea: number;

                        /** DanmuWebPlayerConfig speedplus. */
                        public speedplus: number;

                        /** DanmuWebPlayerConfig fontsize. */
                        public fontsize: number;

                        /** DanmuWebPlayerConfig fullscreensync. */
                        public fullscreensync: boolean;

                        /** DanmuWebPlayerConfig speedsync. */
                        public speedsync: boolean;

                        /** DanmuWebPlayerConfig fontfamily. */
                        public fontfamily: string;

                        /** DanmuWebPlayerConfig bold. */
                        public bold: boolean;

                        /** DanmuWebPlayerConfig fontborder. */
                        public fontborder: number;

                        /** DanmuWebPlayerConfig seniorModeSwitch. */
                        public seniorModeSwitch: number;

                        /**
                         * Creates a new DanmuWebPlayerConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DanmuWebPlayerConfig instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.IDanmuWebPlayerConfig): bilibili.community.service.dm.v1.DanmuWebPlayerConfig;

                        /**
                         * Encodes the specified DanmuWebPlayerConfig message. Does not implicitly {@link bilibili.community.service.dm.v1.DanmuWebPlayerConfig.verify|verify} messages.
                         * @param message DanmuWebPlayerConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.IDanmuWebPlayerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DanmuWebPlayerConfig message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DanmuWebPlayerConfig.verify|verify} messages.
                         * @param message DanmuWebPlayerConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.IDanmuWebPlayerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DanmuWebPlayerConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DanmuWebPlayerConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.DanmuWebPlayerConfig;

                        /**
                         * Decodes a DanmuWebPlayerConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DanmuWebPlayerConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.DanmuWebPlayerConfig;

                        /**
                         * Verifies a DanmuWebPlayerConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DanmuWebPlayerConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DanmuWebPlayerConfig
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.DanmuWebPlayerConfig;

                        /**
                         * Creates a plain object from a DanmuWebPlayerConfig message. Also converts values to other types if specified.
                         * @param message DanmuWebPlayerConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.DanmuWebPlayerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DanmuWebPlayerConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DanmuWebPlayerConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an Expressions. */
                    interface IExpressions {

                        /** Expressions data */
                        data?: (bilibili.community.service.dm.v1.IExpression[]|null);
                    }

                    /** Represents an Expressions. */
                    class Expressions implements IExpressions {

                        /**
                         * Constructs a new Expressions.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IExpressions);

                        /** Expressions data. */
                        public data: bilibili.community.service.dm.v1.IExpression[];

                        /**
                         * Creates a new Expressions instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Expressions instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.IExpressions): bilibili.community.service.dm.v1.Expressions;

                        /**
                         * Encodes the specified Expressions message. Does not implicitly {@link bilibili.community.service.dm.v1.Expressions.verify|verify} messages.
                         * @param message Expressions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.IExpressions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Expressions message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.Expressions.verify|verify} messages.
                         * @param message Expressions message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.IExpressions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Expressions message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Expressions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.Expressions;

                        /**
                         * Decodes an Expressions message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Expressions
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.Expressions;

                        /**
                         * Verifies an Expressions message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Expressions message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Expressions
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.Expressions;

                        /**
                         * Creates a plain object from an Expressions message. Also converts values to other types if specified.
                         * @param message Expressions
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.Expressions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Expressions to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Expressions
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an Expression. */
                    interface IExpression {

                        /** Expression keyword */
                        keyword?: (string[]|null);

                        /** Expression url */
                        url?: (string|null);

                        /** Expression period */
                        period?: (bilibili.community.service.dm.v1.IPeriod[]|null);
                    }

                    /** Represents an Expression. */
                    class Expression implements IExpression {

                        /**
                         * Constructs a new Expression.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IExpression);

                        /** Expression keyword. */
                        public keyword: string[];

                        /** Expression url. */
                        public url: string;

                        /** Expression period. */
                        public period: bilibili.community.service.dm.v1.IPeriod[];

                        /**
                         * Creates a new Expression instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Expression instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.IExpression): bilibili.community.service.dm.v1.Expression;

                        /**
                         * Encodes the specified Expression message. Does not implicitly {@link bilibili.community.service.dm.v1.Expression.verify|verify} messages.
                         * @param message Expression message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.IExpression, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Expression message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.Expression.verify|verify} messages.
                         * @param message Expression message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.IExpression, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Expression message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Expression
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.Expression;

                        /**
                         * Decodes an Expression message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Expression
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.Expression;

                        /**
                         * Verifies an Expression message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Expression message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Expression
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.Expression;

                        /**
                         * Creates a plain object from an Expression message. Also converts values to other types if specified.
                         * @param message Expression
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.Expression, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Expression to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Expression
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Period. */
                    interface IPeriod {

                        /** Period start */
                        start?: (number|Long|null);

                        /** Period end */
                        end?: (number|Long|null);
                    }

                    /** Represents a Period. */
                    class Period implements IPeriod {

                        /**
                         * Constructs a new Period.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IPeriod);

                        /** Period start. */
                        public start: (number|Long);

                        /** Period end. */
                        public end: (number|Long);

                        /**
                         * Creates a new Period instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Period instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.IPeriod): bilibili.community.service.dm.v1.Period;

                        /**
                         * Encodes the specified Period message. Does not implicitly {@link bilibili.community.service.dm.v1.Period.verify|verify} messages.
                         * @param message Period message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.IPeriod, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Period message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.Period.verify|verify} messages.
                         * @param message Period message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.IPeriod, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Period message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Period
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.Period;

                        /**
                         * Decodes a Period message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Period
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.Period;

                        /**
                         * Verifies a Period message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Period message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Period
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.Period;

                        /**
                         * Creates a plain object from a Period message. Also converts values to other types if specified.
                         * @param message Period
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.Period, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Period to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Period
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AnyBody. */
                    interface IAnyBody {

                        /** AnyBody body */
                        body?: (google.protobuf.IAny|null);
                    }

                    /** Represents an AnyBody. */
                    class AnyBody implements IAnyBody {

                        /**
                         * Constructs a new AnyBody.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IAnyBody);

                        /** AnyBody body. */
                        public body?: (google.protobuf.IAny|null);

                        /**
                         * Creates a new AnyBody instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AnyBody instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.IAnyBody): bilibili.community.service.dm.v1.AnyBody;

                        /**
                         * Encodes the specified AnyBody message. Does not implicitly {@link bilibili.community.service.dm.v1.AnyBody.verify|verify} messages.
                         * @param message AnyBody message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.IAnyBody, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AnyBody message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.AnyBody.verify|verify} messages.
                         * @param message AnyBody message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.IAnyBody, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AnyBody message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AnyBody
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.AnyBody;

                        /**
                         * Decodes an AnyBody message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AnyBody
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.AnyBody;

                        /**
                         * Verifies an AnyBody message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AnyBody message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AnyBody
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.AnyBody;

                        /**
                         * Creates a plain object from an AnyBody message. Also converts values to other types if specified.
                         * @param message AnyBody
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.AnyBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AnyBody to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AnyBody
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DmColorful. */
                    interface IDmColorful {

                        /** DmColorful type */
                        type?: (bilibili.community.service.dm.v1.DmColorfulType|null);

                        /** DmColorful src */
                        src?: (string|null);
                    }

                    /** Represents a DmColorful. */
                    class DmColorful implements IDmColorful {

                        /**
                         * Constructs a new DmColorful.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IDmColorful);

                        /** DmColorful type. */
                        public type: bilibili.community.service.dm.v1.DmColorfulType;

                        /** DmColorful src. */
                        public src: string;

                        /**
                         * Creates a new DmColorful instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DmColorful instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.IDmColorful): bilibili.community.service.dm.v1.DmColorful;

                        /**
                         * Encodes the specified DmColorful message. Does not implicitly {@link bilibili.community.service.dm.v1.DmColorful.verify|verify} messages.
                         * @param message DmColorful message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.IDmColorful, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DmColorful message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DmColorful.verify|verify} messages.
                         * @param message DmColorful message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.IDmColorful, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DmColorful message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DmColorful
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.DmColorful;

                        /**
                         * Decodes a DmColorful message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DmColorful
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.DmColorful;

                        /**
                         * Verifies a DmColorful message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DmColorful message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DmColorful
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.DmColorful;

                        /**
                         * Creates a plain object from a DmColorful message. Also converts values to other types if specified.
                         * @param message DmColorful
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.DmColorful, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DmColorful to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DmColorful
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** DmColorfulType enum. */
                    enum DmColorfulType {
                        NoneType = 0,
                        VipGradualColor = 60001
                    }

                    /** Properties of a DmSubView. */
                    interface IDmSubView {

                        /** DmSubView type */
                        type?: (number|null);

                        /** DmSubView oid */
                        oid?: (number|Long|null);

                        /** DmSubView pid */
                        pid?: (number|Long|null);

                        /** DmSubView postPanel_2 */
                        postPanel_2?: (bilibili.community.service.dm.v1.IPostPanelV2[]|null);
                    }

                    /** Represents a DmSubView. */
                    class DmSubView implements IDmSubView {

                        /**
                         * Constructs a new DmSubView.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.community.service.dm.v1.IDmSubView);

                        /** DmSubView type. */
                        public type: number;

                        /** DmSubView oid. */
                        public oid: (number|Long);

                        /** DmSubView pid. */
                        public pid: (number|Long);

                        /** DmSubView postPanel_2. */
                        public postPanel_2: bilibili.community.service.dm.v1.IPostPanelV2[];

                        /**
                         * Creates a new DmSubView instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DmSubView instance
                         */
                        public static create(properties?: bilibili.community.service.dm.v1.IDmSubView): bilibili.community.service.dm.v1.DmSubView;

                        /**
                         * Encodes the specified DmSubView message. Does not implicitly {@link bilibili.community.service.dm.v1.DmSubView.verify|verify} messages.
                         * @param message DmSubView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.community.service.dm.v1.IDmSubView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DmSubView message, length delimited. Does not implicitly {@link bilibili.community.service.dm.v1.DmSubView.verify|verify} messages.
                         * @param message DmSubView message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.community.service.dm.v1.IDmSubView, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DmSubView message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DmSubView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.community.service.dm.v1.DmSubView;

                        /**
                         * Decodes a DmSubView message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DmSubView
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.community.service.dm.v1.DmSubView;

                        /**
                         * Verifies a DmSubView message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DmSubView message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DmSubView
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.community.service.dm.v1.DmSubView;

                        /**
                         * Creates a plain object from a DmSubView message. Also converts values to other types if specified.
                         * @param message DmSubView
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.community.service.dm.v1.DmSubView, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DmSubView to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DmSubView
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Any
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}