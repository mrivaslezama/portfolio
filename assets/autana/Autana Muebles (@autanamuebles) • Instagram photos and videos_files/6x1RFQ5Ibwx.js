;/*FB_PKG_DELIM*/

__d("CometObjectFitContainer.react",["cr:964538","isStringNullOrEmpty","react","stylex","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={inner:{height:"x5yr21d",position:"x1n2onr6",width:"xh8yej3",$$css:!0},innerWithAspectRatio:{bottom:"x1ey2m1c",boxSizing:"x9f619",end:"xds687c",left:null,right:null,position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},outer:{height:"x5yr21d",position:"x1n2onr6",width:"xh8yej3",$$css:!0},outerWithAspectRatio:{height:"xt7dq6l",$$css:!0}};function l(a){var b=a.children,d=a.debugRole;d=a.innerInlineStyle;var e=a.innerXStyle,f=a.outerInlineStyle,g=a.outerRef,i=a.outerXStyle;a=a.testid;var l=c("isStringNullOrEmpty")(a)?void 0:a+"-outer";l=c("isStringNullOrEmpty")(a)?void 0:a+"-inner";return j.jsx("div",babelHelpers["extends"]({},{},{className:(h||(h=c("stylex")))(k.outer,i),"data-testid":void 0,ref:g,style:f,children:j.jsx("div",babelHelpers["extends"]({},{},{className:h(k.inner,e),"data-testid":void 0,style:d,children:b}))}))}l.displayName=l.name+" [from "+f.id+"]";b=j.forwardRef(a);function a(a,b){var d=a.children,e=a.contentAspectRatio,f=a.debugRole,g=a.objectFitMode;g=g===void 0?"CONTAINER_SIZE":g;a=a.testid;a=16/9;e=e!=null&&isFinite(e)&&e>0?e:a;if(g==="CONTAINER_WIDTH_BASED_ASPECT_RATIO"){a=isFinite(e)&&e>0?100/e:100;e={paddingBottom:a.toFixed(5)+"%"};return j.jsx(l,{children:d,debugRole:f,innerXStyle:k.innerWithAspectRatio,outerInlineStyle:e,outerRef:b,outerXStyle:k.outerWithAspectRatio,testid:void 0})}else if(g==="CONTAINER_SIZE")return j.jsx(l,{children:d,debugRole:f,outerRef:b,testid:void 0});else throw c("unrecoverableViolation")("Unsupported objectFitMode "+g,"comet_ui")}a.displayName=a.name+" [from "+f.id+"]";e=b;g["default"]=e}),98);
__d("useCometSize_DO_NOT_USE",["CometThrottle","ExecutionEnvironment","FBLogger","HiddenSubtreePassiveContext","react","useResizeObserver","useStable","useUnsafeRef_DEPRECATED"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j;b=j||d("react");var k=b.useContext,l=b.useEffect,m=b.useLayoutEffect,n=b.useRef,o=b.useState;function p(a){var b=a.setBoxStateStable,d=null,e=function(a){var c;if(((c=d)==null?void 0:c.height)===a.height&&((c=d)==null?void 0:c.width)===a.width)return;d=a;b(a)};a=function(a){a=a.getBoundingClientRect();var b=a.height;a=a.width;e({height:b,width:a})};var f=c("CometThrottle")(function(a){var b=a.height;a=a.width;if(b===0&&a===0)return;e({height:b,width:a})},200,{leading:!0,trailing:!0});return{measure:a,onResizeThrottled:f}}function a(){if(!(h||(h=c("ExecutionEnvironment"))).canUseDOM)throw c("FBLogger")("comet_ssr").blameToPreviousFile().mustfixThrow("useCometSize is not compatible with Server Rendering. This will break SSR! See https://fburl.com/wiki/xrzohrqb");var a=n(null),b=o(null),d=b[0],e=b[1],f=k(c("HiddenSubtreePassiveContext")),g=c("useStable")(function(){return p({setBoxStateStable:e})}),j=c("useResizeObserver")(g.onResizeThrottled),q=n(j);m(function(){q.current=j},[j]);b=(i||(i=c("useUnsafeRef_DEPRECATED")))(function(b){b!==a.current&&(a.current=b,b!=null&&g.measure(b)),q.current(a.current)});l(function(){if(!f.getCurrentState().hidden)return;var b=f.subscribeToChanges(function(c){!c.hidden&&a.current!=null&&(g.measure(a.current),b.remove())});return function(){return b.remove()}},[f,g]);l(function(){return function(){g.onResizeThrottled.cancel()}},[g]);return[b.current,d]}g["default"]=a}),98);
__d("VideoPlayerAudioAvailabilityInfo",["recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a.audioAvailability;a=a.mutedSegmentsUnsanitized;a=a.map(function(a){return a.muteStartTimeInSec!=null&&a.muteEndTimeInSec!=null&&a.muteEndTimeInSec>a.muteStartTimeInSec?{muteEndTimeInSec:a.muteEndTimeInSec,muteStartTimeInSec:a.muteStartTimeInSec}:null}).filter(Boolean);return{audioAvailability:b,mutedSegments:a}}function b(a,b){var d=a.audioAvailability;a=a.mutedSegments;var e=b.playheadPosition,f;b=!1;var g=!1;switch(d){case"AVAILABLE_BUT_MUTED":a.length>0?(b=e!=null&&a.some(function(a){return a.muteStartTimeInSec<=e&&e<=a.muteEndTimeInSec}),b?(f="VOLUME_COPYRIGHT_PARTIAL_SILENCED",g=!0):f="VOLUME_COPYRIGHT_PARTIAL_NOT_SILENCED"):(f="VOLUME_COPYRIGHT_FULL",g=!0);break;case"AVAILABLE_BUT_SILENT":case"UNAVAILABLE":f="VOLUME_SILENT";g=!0;break;case"AVAILABLE":case"UNKNOWN":case"AVAILABLE_BUT_MISSING_LOUDNESS_DATA":case null:case void 0:f="VOLUME_DEFAULT";break;default:c("recoverableViolation")("Unhandled audio availability: "+d,"comet_video_player");f="VOLUME_DEFAULT";break}return{isPlayheadWithinMutedSegment:b,isSilentAtPlayhead:g,volumeControlState:f}}d=a({audioAvailability:null,mutedSegmentsUnsanitized:[]});g.makeVideoPlayerAudioAvailabilityInfo=a;g.makeVideoPlayerAudioAvailabilityAtPlayheadInfo=b;g.VideoPlayerAudioAvailabilityInfoDefault=d}),98);
__d("CoreVideoPlayerImplementationCallbacks",["VideoPlayerAudioAvailabilityInfo","react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useCallback,j=b.useEffect,k=b.useRef;function a(a){var b=a.coreVideoPlayerMetaData,c=a.dimensions,e=a.instanceKey,f=a.isFullscreen,g=a.onCoreVideoStatesChanged,h=a.renderWithCoreVideoStates,l=a.videoPlayerPassiveViewabilityInfo,m=i(function(a){var g,h=a.implementationController;a=a.implementationExposedState;g={adClientToken:b.adClientToken,audioAvailabilityInfo:(g=b.audioAvailabilityInfo)!=null?g:d("VideoPlayerAudioAvailabilityInfo").VideoPlayerAudioAvailabilityInfoDefault,autoplayGatingResult:b.autoplayGatingResult!=null?b.autoplayGatingResult:"unknown",autoplaySetting:b.autoplaySetting,broadcastStatus:b.broadcastStatus,canAutoplay:b.canAutoplay!=null?b.canAutoplay:"allow",controller:h,dimensions:c,duration:a.duration,initialTracePolicy:b.initialTracePolicy,instanceKey:e,isDesktopPictureInPicture:a.isDesktopPictureInPicture,isFullscreen:f,isNCSR:Boolean(b.isNCSR),isPremiumMusicVideo:Boolean(b.isPremiumMusicVideo),lastMuteReason:a.lastMuteReason,lastPauseReason:a.lastPauseReason,lastPlayReason:a.lastPlayReason,loopCount:a.loopCount,loopCurrent:a.loopCurrent,videoFBID:b.videoFBID,videoPixelsAspectRatio:b.videoPixelsAspectRatio,videoPlayerPassiveViewabilityInfo:l,videoState:a,volumeSetting:b.volumeSetting};return g},[b,c,e,f,l]);a=i(function(a){a=m(a);return h(a)},[h,m]);var n=k(null),o=i(function(a){n.current=a.implementationController;if(g){a=m(a);g(a)}},[g,m]);j(function(){var a=n.current;if(g&&a){a=m({implementationController:a,implementationExposedState:a.getCurrentState()});g(a)}},[g,m]);return{onExposedStateChanged:o,renderWithExposedState:a}}g.useImplementationCallbacks=a}),98);
__d("VideoPlayerOnViewability.react",["DOMRectIsEqual","DOMRectReadOnly","VideoPlayerViewabilityConstants","emptyFunction","react","useIntersectionObserver","useUnsafeRef_DEPRECATED"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));b=i;var k=b.useCallback,l=b.useMemo,m=b.useRef,n=10,o=[.25,.75,.99,1].concat(new Array(10).fill().map(function(a,b){return b/10}));function a(a){var b=a.viewportMargins,d=m(-1),e=m(-1),f=m(c("DOMRectReadOnly").fromRect({height:0,width:0,x:0,y:0})),g=m(null),i=m(null);b=-b.top+"px "+-b.right+"px "+-b.bottom+"px "+-b.left+"px";var p=a.onVideoPlayerViewabilityInfoChange||c("emptyFunction"),q=n,r=k(function(a){if(a.time>e.current&&!c("DOMRectIsEqual")(a.boundingClientRect,f.current)){var b=a.boundingClientRect,d=b.height,h=b.width,i=b.x;b=b.y;var j=g.current;d=c("DOMRectReadOnly").fromRect({height:d,width:h,x:i,y:b});f.current=d;e.current=a.time;if(j===null||j<=0)return;if(j<=c("VideoPlayerViewabilityConstants").DEFAULT_VIEWABILITY_PERCENTAGE_FOR_PAUSE)return;p({positionToViewport:d,visiblePercentage:j})}},[f,g,p]),s=k(function(a){if(a.time>d.current&&(a.intersectionRatio!==g.current||!c("DOMRectIsEqual")(a.boundingClientRect,f.current))){var b=a.boundingClientRect,h=b.height,j=b.width,k=b.x;b=b.y;var l=a.intersectionRatio;h=c("DOMRectReadOnly").fromRect({height:h,width:j,x:k,y:b});j=i.current;k=j;b=!1;var m=Math.abs((j||0)*100-(l||0)*100);(l!==null&&m>=1||m>0&&l<(j||0))&&(k=l,i.current=l,b=!0);g.current=l;d.current=a.time;m=f.current;f.current=h;e.current=a.time;if(!b&&c("DOMRectIsEqual")(m,h))return;k!==null&&p({positionToViewport:h,visiblePercentage:k})}},[e,f,g,p,d]),t=l(function(){var b=[];for(var a=1;a<=q;a++)b.push("-"+(100-a/q*100)+"% 0% 0% 0%");return b},[q]),u=(h||(h=c("useUnsafeRef_DEPRECATED")))([]);u.current=[];for(var v=0;v<t.length;v++)u.current.push(k(c("useIntersectionObserver")(r,{root:null,rootMargin:t[v],threshold:o}),[t[v],o,c("useIntersectionObserver")]));var w=u.current.length,x=k(function(a){for(var b=0;b<w;b++)u.current[b](a)},[w,u]),y=k(c("useIntersectionObserver")(s,{root:null,rootMargin:b,threshold:o}),[s,b,o,c("useIntersectionObserver")]);v=k(function(a){y(a),x(a)},[y,x]);return j.jsx("div",{className:"x5yr21d x1uhb9sk xh8yej3",ref:v,children:j.Children.only(a.children)})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoPlayerViewabilityContexts",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=(h||d("react")).createContext;b=a(null);c=a(!1);e=a(!1);f=a(null);g.VideoPlayerPassiveViewabilityInfoContext=b;g.VideoPlayerDesktopPictureInPictureContext=c;g.VideoPlayerFullscreenContext=e;g.VideoPlayerExtendedPassiveViewabilityInfoContext=f}),98);
__d("VideoPlayerContexts",["VideoPlayerAudioAvailabilityInfo","react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=(h||d("react")).createContext;b=a(null);c=a(!1);e=a("");f=a(null);var i=a(0),j=a(0),k=a(!1),l=a(!1),m=a(!0),n=a(!1),o=a(!1),p=a(null),q=a(!1),r=a(!1),s=a(null),t=a(null),u=a(null),v=a(null),w=a([]),x=a("notselected"),y=a([]),z=a(null),A=a(null),B=a(null),C=a(""),D=a([]),E=a(null),F=a(!1),G=a(!1),H=a(null),I=a(1),J=a(!1),K=a(0),L=a(0),M=a(null),N=a(null),O=a(null),P=a(null),Q=a(!1),R=a(!1),S=a(null),T=a("deny"),U=a(null),V=a("unknown"),W=a(!1),X=a(!1),Y=a({release:function(a){},reserve:function(a){return a}}),Z=a([]),$=a(!1),aa=a(0),ba=a(0),ca=a(null),da=a(!1);d=a(d("VideoPlayerAudioAvailabilityInfo").VideoPlayerAudioAvailabilityInfoDefault);var ea=a(1),fa=a(!1),ga=a(!1),ha=a(null),ia=a("normal");a=a([]);g.VideoFBIDContext=b;g.IsAbrEnabledContext=c;g.TargetVideoQualityContext=e;g.AdClientTokenContext=f;g.LoopCountContext=i;g.LoopCurrentContext=j;g.PlayingContext=k;g.StallingContext=l;g.PausedContext=m;g.EndedContext=n;g.InPlayStallingContext=o;g.ErrorContext=p;g.IsLiveContext=q;g.SeekingContext=r;g.ControllerContext=s;g.LastMuteReasonContext=t;g.LastPlayReasonContext=u;g.LastPauseReasonContext=v;g.AvailableVideoQualitiesContext=w;g.SelectedVideoQualityContext=x;g.AvailableAudioTracksContext=y;g.SelectedAudioTrackIDContext=z;g.CurrentAudioTrackIDContext=A;g.CurrentVideoTrackIDContext=B;g.CurrentVideoQualityContext=C;g.AvailableVideoTracksContext=D;g.ActiveCaptionsContext=E;g.CaptionsVisibleContext=F;g.CaptionsLoadedContext=G;g.CaptionDisplayStyleContext=H;g.VolumeContext=I;g.MutedContext=J;g.DurationContext=K;g.BufferEndContext=L;g.InstanceKeyContext=M;g.VideoPixelsAspectRatioContext=N;g.DimensionsContext=O;g.PlayerVersionContext=P;g.VideoPlayerMouseHoverContext=Q;g.VideoPlayerMouseIdleContext=R;g.BroadcastStatusContext=S;g.CanAutoplayContext=T;g.VolumeSettingContext=U;g.AutoplayGatingResultContext=V;g.InbandCaptionsAutogeneratedContext=W;g.IsExternalMediaContext=X;g.VideoPlayerCaptionsReservationActionsContext=Y;g.VideoPlayerCaptionsReservationsContext=Z;g.StreamInterruptedContext=$;g.WatchTimeContext=aa;g.LastPlayedTimeContext=ba;g.SeekableRangesContext=ca;g.IsLiveRewindActiveContext=da;g.AudioAvailabilityInfoContext=d;g.PlaybackRateContext=ea;g.IsNCSRContext=fa;g.IsPremiumMusicVideoContext=ga;g.InitialTracePolicyContext=ha;g.LatencyLevelContext=ia;g.ActiveEmsgBoxesContext=a}),98);
__d("VideoPlayerVideoPixelsFitContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=(h||d("react")).createContext;b=a(null);c=b;g["default"]=c}),98);
__d("VideoPlayerHooks",["DOMRectIsEqual","VideoPlayerContexts","VideoPlayerVideoPixelsFitContext","VideoPlayerViewabilityContexts","clearTimeout","react","removeFromArray","setTimeout","unrecoverableViolation","useStable"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=h||d("react"),k=j.useContext,l=j.useEffect,m=j.useRef,n=j.useState;function a(a){var b=m(a);l(function(){b.current=a},[a]);return b}function o(){var a=k((i||(i=d("VideoPlayerContexts"))).ControllerContext);if(a==null)throw c("unrecoverableViolation")("Empty ControllerContext. Are you rendering useController outside of VideoPlayerRelay/VideoPlayerX?","comet_video_player");return a}function b(){var a=k((i||(i=d("VideoPlayerContexts"))).InstanceKeyContext);if(a==null)throw c("unrecoverableViolation")("Empty InstanceKeyContext. Are you rendering useInstanceKey outside of VideoPlayerRelay/VideoPlayerX?","comet_video_player");return a}function p(){var a=T();return a==="LIVE"}function e(){var a=T();return a==="LIVE"||a==="VOD_READY"}function f(){return k((i||(i=d("VideoPlayerContexts"))).BufferEndContext)}function q(){return k((i||(i=d("VideoPlayerContexts"))).DurationContext)}function r(){return k((i||(i=d("VideoPlayerContexts"))).SeekingContext)}function s(){return k((i||(i=d("VideoPlayerContexts"))).EndedContext)}function t(){return k((i||(i=d("VideoPlayerContexts"))).ErrorContext)}function u(){return k((i||(i=d("VideoPlayerContexts"))).PlayingContext)}function v(){var a=n(0),b=a[0],c=a[1],d=o();l(function(){var a=d.subscribe(function(){c(d.getPlayheadPosition())});c(d.getPlayheadPosition());return function(){return a.remove()}},[d]);return b}function w(a,b){var d=n(0),e=d[0],f=d[1],g=o(),h=m(null),i=m(e);l(function(){var d=g.subscribe(function(){i.current=b?b(g):g.getPlayheadPosition();if(h.current!=null)return;h.current=c("setTimeout")(function(){f(i.current),h.current=null},a)});f(g.getPlayheadPosition());return d.remove},[g,a]);l(function(){return function(){h.current!==null&&(c("clearTimeout")(h.current),h.current=null)}},[]);return e}function x(a){a===void 0&&(a=200);var b=n(0),d=b[0],e=b[1],f=o(),g=p(),h=m(null),i=m(d);l(function(){if(!g)return;var b=f.subscribe(function(){if(h.current!=null)return;h.current=c("setTimeout")(function(){f.getCurrentState().paused||(i.current+=a/1e3,e(i.current)),h.current=null},a)});e(0);return function(){return b.remove()}},[f,a,g]);l(function(){return function(){h.current!==null&&(c("clearTimeout")(h.current),h.current=null)}},[]);return!g?null:d}function y(){var a=o(),b=m([]),d=m(a.isFrozen()),e=c("useStable")(function(){return{getCurrentState:function(){return a.isFrozen()},subscribeToChanges:function(a){var d=b.current;d.push(a);return{remove:function(){return c("removeFromArray")(d,a)}}}}});l(function(){var c=a.subscribe(function(){var c=d.current,e=a.isFrozen();d.current=e;if(e!==c){c=b.current;c.forEach(function(a){return a(e)})}});return function(){c.remove()}},[a]);return e}function z(){return k((i||(i=d("VideoPlayerContexts"))).WatchTimeContext)}function A(){return k((i||(i=d("VideoPlayerContexts"))).LastPlayedTimeContext)}function B(){return k((i||(i=d("VideoPlayerContexts"))).PausedContext)}function C(){return k((i||(i=d("VideoPlayerContexts"))).StallingContext)}function D(){return k((i||(i=d("VideoPlayerContexts"))).InPlayStallingContext)}function E(){return k((i||(i=d("VideoPlayerContexts"))).LastMuteReasonContext)}function F(){return k((i||(i=d("VideoPlayerContexts"))).LastPauseReasonContext)}function G(){return k((i||(i=d("VideoPlayerContexts"))).LastPlayReasonContext)}function H(){return k((i||(i=d("VideoPlayerContexts"))).AvailableVideoQualitiesContext)}function I(){return k((i||(i=d("VideoPlayerContexts"))).AvailableAudioTracksContext)}function J(){return k((i||(i=d("VideoPlayerContexts"))).AvailableVideoTracksContext)}function K(){return k((i||(i=d("VideoPlayerContexts"))).CaptionsVisibleContext)}function L(){return k((i||(i=d("VideoPlayerContexts"))).CaptionDisplayStyleContext)}function M(){return k((i||(i=d("VideoPlayerContexts"))).ActiveCaptionsContext)}function N(){return k((i||(i=d("VideoPlayerContexts"))).CurrentAudioTrackIDContext)}function O(){return k((i||(i=d("VideoPlayerContexts"))).CurrentVideoQualityContext)}function P(){return k((i||(i=d("VideoPlayerContexts"))).CurrentVideoTrackIDContext)}function Q(){return k((i||(i=d("VideoPlayerContexts"))).SelectedVideoQualityContext)}function R(){return k((i||(i=d("VideoPlayerContexts"))).SelectedAudioTrackIDContext)}function aa(){return k((i||(i=d("VideoPlayerContexts"))).MutedContext)}function ba(){return k((i||(i=d("VideoPlayerContexts"))).VolumeContext)}function ca(){return k(d("VideoPlayerViewabilityContexts").VideoPlayerDesktopPictureInPictureContext)}function da(){return k(d("VideoPlayerViewabilityContexts").VideoPlayerFullscreenContext)}function ea(){return k((i||(i=d("VideoPlayerContexts"))).DimensionsContext)}function fa(){return k((i||(i=d("VideoPlayerContexts"))).VideoPixelsAspectRatioContext)}function ga(){return k((i||(i=d("VideoPlayerContexts"))).PlayerVersionContext)}function ha(){return k((i||(i=d("VideoPlayerContexts"))).CaptionsLoadedContext)}function ia(){return k((i||(i=d("VideoPlayerContexts"))).IsAbrEnabledContext)}function ja(){return k((i||(i=d("VideoPlayerContexts"))).TargetVideoQualityContext)}function ka(){return k((i||(i=d("VideoPlayerContexts"))).VideoPlayerMouseHoverContext)}function la(){return k((i||(i=d("VideoPlayerContexts"))).VideoPlayerMouseIdleContext)}function S(){return k(d("VideoPlayerViewabilityContexts").VideoPlayerPassiveViewabilityInfoContext)}function ma(){return k(d("VideoPlayerViewabilityContexts").VideoPlayerExtendedPassiveViewabilityInfoContext)}function na(){var a=S(),b=n(null),d=b[0],e=b[1],f=m(d);l(function(){f.current=d},[d]);l(function(){if(a){var b=function(){var b=a.getCurrent();if(b){var d=b.positionToViewport;b=b.visiblePercentage;var g=f.current;(g==null||b!==g.visiblePercentage||!c("DOMRectIsEqual")(d,g.positionToViewport))&&e({positionToViewport:d,visiblePercentage:b})}},d=a.subscribe(function(){b()});return function(){return d.remove()}}},[e,a]);return d}function T(){return k((i||(i=d("VideoPlayerContexts"))).BroadcastStatusContext)}function oa(){return k((i||(i=d("VideoPlayerContexts"))).CanAutoplayContext)}function pa(){return k((i||(i=d("VideoPlayerContexts"))).VolumeSettingContext)}function qa(){return k((i||(i=d("VideoPlayerContexts"))).AutoplayGatingResultContext)}function ra(){return k((i||(i=d("VideoPlayerContexts"))).VideoFBIDContext)}function U(){return k((i||(i=d("VideoPlayerContexts"))).AdClientTokenContext)}function V(){return k((i||(i=d("VideoPlayerContexts"))).LoopCurrentContext)}function W(){return k((i||(i=d("VideoPlayerContexts"))).LoopCountContext)}function sa(){return k((i||(i=d("VideoPlayerContexts"))).InbandCaptionsAutogeneratedContext)}function ta(){return k((i||(i=d("VideoPlayerContexts"))).IsExternalMediaContext)}function ua(){return k((i||(i=d("VideoPlayerContexts"))).VideoPlayerCaptionsReservationsContext)}function va(){return k((i||(i=d("VideoPlayerContexts"))).VideoPlayerCaptionsReservationActionsContext)}function wa(){return k((i||(i=d("VideoPlayerContexts"))).StreamInterruptedContext)}function xa(){return k((i||(i=d("VideoPlayerContexts"))).SeekableRangesContext)}function X(){return k((i||(i=d("VideoPlayerContexts"))).IsLiveRewindActiveContext)}function Y(){var a=s(),b=V(),c=W();a=a&&(c===-1||c>0&&b<c);return a}function ya(){var a=s(),b=Y();return a&&!b}function za(){return k((i||(i=d("VideoPlayerContexts"))).PlaybackRateContext)}function Aa(){return k((i||(i=d("VideoPlayerContexts"))).IsNCSRContext)}function Z(){return k((i||(i=d("VideoPlayerContexts"))).IsPremiumMusicVideoContext)}function Ba(){var a=U()!=null,b=p(),c=Z(),d=X();if(a||c)return!1;if(b)return d;else return!0}function Ca(){return k((i||(i=d("VideoPlayerContexts"))).InitialTracePolicyContext)}function Da(){return k((i||(i=d("VideoPlayerContexts"))).LatencyLevelContext)}function Ea(){return k((i||(i=d("VideoPlayerContexts"))).AudioAvailabilityInfoContext)}function Fa(){var a=U()!=null,b=p(),c=Z();return a||c||b?!1:!0}function $(a){a===void 0&&(a=!0);var b=o();l(function(){if(a){var c=b.registerEmsgObserver();return function(){b.unregisterEmsgObserver(c)}}},[b,a])}function Ga(){$();return k((i||(i=d("VideoPlayerContexts"))).ActiveEmsgBoxesContext)}function Ha(){return k(c("VideoPlayerVideoPixelsFitContext"))}g.useLatestValueRef=a;g.useController=o;g.useInstanceKey=b;g.useIsLive=p;g.useIsVideoBroadcast=e;g.useBufferEnd=f;g.useDuration=q;g.useSeeking=r;g.useEnded=s;g.useError=t;g.usePlaying=u;g.useCurrentTime_DO_NOT_USE=v;g.useCurrentTimeThrottled=w;g.useLiveTimeElapsedThrottled=x;g.useIsFrozenPassive=y;g.useWatchTime=z;g.useLastPlayedTime=A;g.usePaused=B;g.useStalling=C;g.useInPlayStalling=D;g.useLastMuteReason=E;g.useLastPauseReason=F;g.useLastPlayReason=G;g.useAvailableVideoQualities=H;g.useAvailableAudioTracks=I;g.useAvailableVideoTracks=J;g.useCaptionsVisible=K;g.useCaptionDisplayStyle=L;g.useActiveCaptions=M;g.useCurrentAudioTrackID=N;g.useCurrentVideoQuality=O;g.useCurrentVideoTrackID=P;g.useSelectedVideoQuality=Q;g.useSelectedAudioTrackID=R;g.useMuted=aa;g.useVolume=ba;g.useIsDesktopPictureInPicture=ca;g.useIsFullscreen=da;g.useDimensions=ea;g.useVideoPixelsAspectRatio=fa;g.usePlayerVersion=ga;g.useCaptionsLoaded=ha;g.useIsAbrEnabled=ia;g.useTargetVideoQuality=ja;g.useIsHovering=ka;g.useIsMouseIdle=la;g.useVideoPlayerPassiveViewabilityInfo=S;g.useVideoPlayerExtendedPassiveViewabilityInfo=ma;g.useVideoPlayerViewabilityInfo=na;g.useBroadcastStatus=T;g.useCanAutoplay=oa;g.useVolumeSetting=pa;g.useAutoplayGatingResult=qa;g.useVideoFbid=ra;g.useAdClientToken=U;g.useVideoPlayerCurrentLoop=V;g.useVideoPlayerTotalLoops=W;g.useInbandCaptionsAutogenerated=sa;g.useIsExternalMedia=ta;g.useVideoPlayerCaptionsReservations=ua;g.useVideoPlayerCaptionsReservationActions=va;g.useStreamInterrupted=wa;g.useSeekableRanges_DO_NOT_USE=xa;g.useIsLiveRewindActive=X;g.useIsTransitioningToNextLoop=Y;g.useVideoPlaybackEnded=ya;g.usePlaybackRate=za;g.useIsNCSR=Aa;g.useIsPremiumMusicVideo=Z;g.useShouldShowPlaybackRateControl=Ba;g.useVideoPlayerInitialTracePolicy=Ca;g.useLatencyLevel=Da;g.useAudioAvailabilityInfo=Ea;g.useShouldPersistPlaybackRate=Fa;g.useEmsgObserver=$;g.useActiveEmsgBoxes=Ga;g.useVideoPlayerVideoPixelsFit=Ha}),98);
__d("createVideoStateHook",["VideoPlayerHooks","emptyFunction","gkx","react","unrecoverableViolation","useStable"],(function(a,b,c,d,e,f,g){"use strict";var h,i;b=h||d("react");var j=b.useEffect,k=b.useMemo,l=b.useRef,m=b.useState,n=b.useSyncExternalStore,o=new Set();e=function(a){var b=new Map();o.add(b);function e(){var a=(i||(i=d("VideoPlayerHooks"))).useInstanceKey();b.has(a)||b.set(a,{consumers:new Set(),key:a,lastValue:void 0});var e=b.get(a);if(e==null)throw c("unrecoverableViolation")('createVideoStateHook useInstance missing instance by key "'+a+'"',"comet_video_player");return e}function f(a,b){a.consumers.add(b)}function g(a,b){a.consumers["delete"](b)}function h(a,b,c){a.lastValue=b,a.consumers.forEach(function(a){c!==a&&a(b)})}function k(a){var b=e(),c=l(b);c.current=b;a=b.lastValue!=null?b.lastValue:a;var d=l(a);d.current=a;a=m(a);var i=a[0],k=a[1];j(function(){k(d.current);f(b,k);return function(){g(b,k)}},[b]);j(function(){h(c.current,i,k)},[i]);return[i,k]}function a(a){a=k(a);a[0];a=a[1];return a}function n(a){a=k(a);var b=a[0];a[1];return b}return{setterHook:a,stateHook:k,valueHook:n}};f=function(a){var b=new Map();o.add(b);var e=c("emptyFunction");function f(a,c){var d=b.get(a);d||(d={consumers:new Set(),key:a,lastValue:c},b.set(a,d));return d}function g(a,c){return{getSnapshot:function(){var d=b.get(a);return d==null?c:d.lastValue},setValue:function(b){var d=f(a,c),e;typeof b==="function"?e=b(d.lastValue):e=b;d.lastValue=e;d.consumers.forEach(function(a){a(e)})},subscribe:function(b){var d=f(a,c);d.consumers.add(b);return function(){d.consumers["delete"](b)}}}}function a(a){var b=c("useStable")(function(){return a}),e=(i||(i=d("VideoPlayerHooks"))).useInstanceKey(),f=k(function(){return g(e,b)},[b,e]),h=f.getSnapshot,j=f.setValue;f=f.subscribe;f=n(f,h);return[f,j]}function h(a){var b=c("useStable")(function(){return a}),e=(i||(i=d("VideoPlayerHooks"))).useInstanceKey(),f=k(function(){return g(e,b)},[b,e]);f=f.setValue;return f}function j(a){var b=c("useStable")(function(){return a}),e=(i||(i=d("VideoPlayerHooks"))).useInstanceKey(),f=k(function(){return g(e,b)},[b,e]),h=f.getSnapshot;f=f.subscribe;return n(f,h)}return{setterHook:h,stateHook:a,valueHook:j}};function a(a){j(function(){return function(){o.forEach(function(b){b["delete"](a)})}},[a])}b=c("gkx")("24343")?f:e;a=a;g.createVideoStateHookImpl_UnsafeForConcurrentRendering=e;g.createVideoStateHookImpl_SafeForConcurrentRendering=f;g.createVideoStateHook=b;g.useCleanupVideoStateHooks_INTERNAL=a}),98);
__d("VideoShareDownstreamSignalTrackingTypes",[],(function(a,b,c,d,e,f){"use strict";a="downstream_video_share_data";f.DOWNSTREAM_VIDEO_SHARE_SESSION_STORAGE_KEY=a}),66);
__d("getVideoShareDownstreamSignalTracking",["VideoShareDownstreamSignalTrackingTypes","WebStorage","gkx"],(function(a,b,c,d,e,f,g){"use strict";var h,i=1e3*60*60*4;function j(){var a;if(!c("gkx")("24"))return null;a=(a=(h||(h=c("WebStorage"))).getSessionStorage())==null?void 0:a.getItem(d("VideoShareDownstreamSignalTrackingTypes").DOWNSTREAM_VIDEO_SHARE_SESSION_STORAGE_KEY);if(a==null)return null;a=JSON.parse(a);return!a||a.downstream_share_session_start_time+i<Date.now()?null:a}function a(){var a=j();return!a?null:{downstream_share_session_id:a==null?void 0:a.downstream_share_session_id,downstream_share_session_origin_uri:a==null?void 0:a.downstream_share_session_origin_uri,downstream_share_session_start_time:a==null?void 0:a.downstream_share_session_start_time.toString()}}g.getVideoShareDownstreamSignalTrackingWithNumberStartTime=j;g.getVideoShareDownstreamSignalTracking=a}),98);
__d("renderVideoPlayerImplementation",["react","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a,b){if(a.typename==="VideoPlayerEmptyImplementation")return i.jsx(a.Component,babelHelpers["extends"]({},b,a.data));else if(a.typename==="VideoPlayerOzImplementation")return i.jsx(a.Component,babelHelpers["extends"]({},b,a.data));else if(a.typename==="VideoPlayerProgressiveImplementation")return i.jsx(a.Component,babelHelpers["extends"]({},b,a.data));else if(a.typename==="VideoPlayerNextgendashImplementation")return i.jsx(a.Component,babelHelpers["extends"]({},b,a.data));else{a.typename;throw c("unrecoverableViolation")('CoreVideoPlayer: Unrecognized implementation typename "'+a.typename+'".',"comet_video_player")}}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useCreateVideoPlayerPassiveViewabilityInfo",["removeFromArray","useStable"],(function(a,b,c,d,e,f,g){"use strict";function a(){return c("useStable")(function(){var a=[],b=null;return{setVideoPlayerPassiveViewabilityInfo:function(c){b=c,a.forEach(function(a){return a()})},videoPlayerPassiveViewabilityInfo:{getCurrent:function(){return b},subscribe:function(b){a.push(b);return{remove:function(){c("removeFromArray")(a,b)}}}}}})}g["default"]=a}),98);
__d("videoPlayerUniqueID",["guid"],(function(a,b,c,d,e,f,g){"use strict";function a(){return"id-vpuid-"+c("guid")()}g["default"]=a}),98);
__d("CoreVideoPlayer.react",["CometObjectFitContainer.react","CoreVideoPlayerImplementationCallbacks","ErrorMetadata","FBLogger","VideoPlayerOnViewability.react","VideoPlayerViewabilityContexts","cr:1136","createVideoStateHook","err","getVideoShareDownstreamSignalTracking","react","renderVideoPlayerImplementation","useCometSize_DO_NOT_USE","useCreateVideoPlayerPassiveViewabilityInfo","useStable","videoPlayerUniqueID"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));e=h;var j=e.useCallback,k=e.useRef,l=584;function m(a){return a!=null&&isFinite(a)&&a>0?a:0}function n(a){if(a==="video_home_inline"||a==="inline")return{height:l,width:l};else return{height:1080,width:1920}}function o(a){var b=c("useCometSize_DO_NOT_USE")(),d=b[0];b=b[1];b=(b=b)!=null?b:n(a);return[b,function(a){return i.jsx(c("CometObjectFitContainer.react"),{debugRole:null,objectFitMode:"CONTAINER_SIZE",ref:d,children:a})}]}function p(a){var b=a.implementation,e=a.accessToken,f=a.expiredVideoUrlRefreshHandler,g=a.fullscreenController,h=a.isFullscreen,l=a.onCoreVideoStatesChanged,n=a.productAttribution,p=a.renderWithCoreVideoStates,q=a.trackingDataEncrypted,r=a.trackingNodes,s=a.viewportMarginsForViewability;a=babelHelpers.objectWithoutPropertiesLoose(a,["implementation","accessToken","expiredVideoUrlRefreshHandler","fullscreenController","isFullscreen","onCoreVideoStatesChanged","productAttribution","renderWithCoreVideoStates","trackingDataEncrypted","trackingNodes","viewportMarginsForViewability"]);var t=c("useStable")(c("videoPlayerUniqueID"));d("createVideoStateHook").useCleanupVideoStateHooks_INTERNAL(t);var u=k(0),v=c("useCreateVideoPlayerPassiveViewabilityInfo")(),w=v.setVideoPlayerPassiveViewabilityInfo;v=v.videoPlayerPassiveViewabilityInfo;var x=o(a.subOrigin),y=x[0];x=x[1];var z=j(function(a){w(a)},[w]);l=d("CoreVideoPlayerImplementationCallbacks").useImplementationCallbacks({coreVideoPlayerMetaData:a,dimensions:y,instanceKey:t,isFullscreen:h,onCoreVideoStatesChanged:l,renderWithCoreVideoStates:p,videoPlayerPassiveViewabilityInfo:v});p=l.onExposedStateChanged;l=l.renderWithExposedState;var A=d("getVideoShareDownstreamSignalTracking").getVideoShareDownstreamSignalTrackingWithNumberStartTime();e={accessToken:e,coreVideoPlayerMetaData:a,dimensions:y,downstreamShareSignalTracking:A,instanceKey:t,playerImplementationInstanceCountRef:u,productAttribution:n,trackingDataEncrypted:q,trackingNodes:r};A=Boolean(a.captionsUrl);t=Boolean(a.isLiveStreaming);q={VideoPlayerShakaPerformanceLoggerClass:a.VideoPlayerShakaPerformanceLoggerClass,alt:a.alt,alwaysShowCaptions:a.alwaysShowCaptions,areCaptionsAutogenerated:a.areCaptionsAutogenerated,audioOnly:a.audioOnly,broadcastLatencySensitivity:a.broadcastLatencySensitivity,bufferEndLimit:a.bufferEndLimit,captionDisplayStyle:a.captionDisplayStyle,captionsUrl:a.captionsUrl,dimensions:y,disableLogging:a.disableLogging===!0,enableCrossOriginAnonymous:a.enableCrossOriginAnonymous,enableSNAPL:a.enableSNAPL===!0,expiredVideoUrlRefreshHandler:f,fullscreenController:g,graphQLVideoDRMInfo:(u=a.graphQLVideoDRMInfo)!=null?u:null,graphQLVideoP2PSettings:(n=a.graphQLVideoP2PSettings)!=null?n:null,inbandCaptionsExpected:t,initialDesiredLatencyMs:a.desiredLatencyMs,initialLatencyToleranceMs:a.latencyToleranceMs,initialRepresentationIds:a.initialRepresentationIds,isClientTriggeredTraceEnabled:a.isClientTriggeredTraceEnabled,loadSequence:a.loadSequence,loggingMetaData:e,loopCount:a.loopCount,onExposedStateChanged:p,poster:a.poster,preloadForProgressiveDisabled:a.preloadForProgressiveDisabled,renderVideoPixelsFit:a.renderVideoPixelsFit,renderWithExposedState:l,seoWebCrawlerLookasideUrl:a.seoWebCrawlerLookasideUrl,seoWebCrawlerVideoTracks:a.seoWebCrawlerVideoTracks,sideLoadCaptionsExpected:A,startTimestamp:m(a.startTimestamp),videoFBID:a.videoFBID,videoPlayerPassiveViewabilityInfo:v,videoPlayerShakaPerformanceLoggerBuilder:a.videoPlayerShakaPerformanceLoggerBuilder,wrapVideoPixels_EXPERIMENTAL:a.wrapVideoPixels_EXPERIMENTAL};return x(i.jsx(d("VideoPlayerViewabilityContexts").VideoPlayerFullscreenContext.Provider,{value:h,children:i.jsx(c("VideoPlayerOnViewability.react"),{onVideoPlayerViewabilityInfoChange:z,viewportMargins:s,children:c("renderVideoPlayerImplementation")(b,q)})}))}p.displayName=p.name+" [from "+f.id+"]";function a(a){var d=a.implementations;a=babelHelpers.objectWithoutPropertiesLoose(a,["implementations"]);if(d.length===0){var e,f=c("err")("No implementations given to CoreVideoPlayer");f.name="VideoPlayerNoImplementations";f.project="comet_video_player";e=(e=f.metadata)!=null?e:new(c("ErrorMetadata"))();f.metadata=e;var g=a.videoFBID;g!=null&&e.addEntry("COMET_VIDEO","VIDEO_ID",g);throw(e=c("FBLogger")("comet_video_player").catching(f)).mustfixThrow.apply(e,[(g=f.messageFormat)!=null?g:f.message].concat(f.messageFormat!=null?(e=f.messageParams)!=null?e:[]:[]))}return b("cr:1136")?i.jsx(b("cr:1136"),{CoreVideoPlayerWithOneImplementation:p,coreVideoPlayerProps:a,implementations:d}):i.jsx(p,babelHelpers["extends"]({},a,{implementation:d[0]}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("DOMContainer.react",["invariant","isNode","react"],(function(a,b,c,d,e,f,g,h){var i,j=i||d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.containerNode=null,c.setContainerNode=function(a){c.containerNode=a;var b=c.props.containerRef;typeof b==="function"&&b(a)},b)||babelHelpers.assertThisInitialized(c)}var d=b.prototype;d.getDOMChild=function(){var a=this.props.children;c("isNode")(a)||h(0,1533);return a};d.shouldComponentUpdate=function(a){return a.children!==this.props.children};d.componentDidMount=function(){var a=this.containerNode;a!=null&&a.appendChild(this.getDOMChild())};d.componentDidUpdate=function(a){a=this.containerNode;if(a==null)return;while(a.lastChild)a.removeChild(a.lastChild);a.appendChild(this.getDOMChild())};d.render=function(){var a=this.props,b=a.display;a=babelHelpers.objectWithoutPropertiesLoose(a,["display"]);b=b==="block"?"div":"span";return j.jsx(b,babelHelpers["extends"]({},a,{ref:this.setContainerNode,children:void 0}))};return b}(j.Component);a.defaultProps={display:"inline"};g["default"]=a}),98);
__d("CoreVideoPlayerFitParentContainer.react",["DOMContainer.react","cr:964538","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");b=i.forwardRef(function(a,b){var c=a.children,d=a.debugRole;d=a.testid;return i.jsx("div",babelHelpers["extends"]({},null,{className:"x1lliihq x5yr21d x1n2onr6 xh8yej3 x1ja2u2z","data-testid":void 0,ref:b,children:c}))});e=i.forwardRef(function(a,b){var d=a.debugRole;d=a.domElement;return i.jsx(c("DOMContainer.react"),babelHelpers["extends"]({},null,{className:"x1lliihq x5yr21d x1n2onr6 xh8yej3 x1ja2u2z",display:"block",ref:b,children:d}))});function a(a){a=a.debugRole;a=document.createElement("div");a.className="x1lliihq x5yr21d x1n2onr6 xh8yej3 x1ja2u2z";return a}g.CoreVideoPlayerFitParentContainer=b;g.CoreVideoPlayerFitParentDOMContainer=e;g.createFitParentContainerDiv=a}),98);
__d("VideoPlayerPortalingPlaceInfoProvider.react",["emptyFunction","react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));e=h;d=e.createContext;var j=e.useContext,k=e.useEffect,l=e.useMemo,m=d(null);function a(a){var b=a.children,c=a.currentPlaceID,d=a.currentVideoID,e=a.portalingEnabled,f=a.previousPlaceMetaData,g=a.thisPlaceID;a=l(function(){return{currentPlaceID:c,currentVideoID:d,portalingEnabled:e,previousPlaceMetaData:f,thisPlaceID:g}},[c,d,e,f,g]);return i.jsx(m.Provider,{value:a,children:b})}a.displayName=a.name+" [from "+f.id+"]";var n=c("emptyFunction");function b(){var a=j(m);n(a);return a==null?{currentPlaceID:null,currentVideoID:null,portalingEnabled:!1,previousPlaceMetaData:null,thisPlaceID:null}:a}g.VideoPlayerPortalingPlaceInfoProvider=a;g.useVideoPlayerPortalingPlaceInfo=b}),98);
__d("GlobalVideoPortsRenderers.react",["CoreVideoPlayer.react","VideoPlayerContexts","VideoPlayerPortalingPlaceInfoProvider.react","emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=h||(h=d("react")),k=h,l=k.useEffect,m=k.useState,n=c("emptyFunction").thatReturns(null);function a(a){var b=a.coreVideoPlayerMetaData,e=a.currentPlaceID,f=a.currentVideoID,g=a.fullscreenController,h=a.implementations,i=a.isFullscreen,k=a.onCoreVideoStatesChanged,l=a.previousPlaceMetaData,m=a.trackingDataEncrypted,o=a.trackingNodes;a=a.viewportMarginsForViewability;var p=n;return j.jsx(d("VideoPlayerPortalingPlaceInfoProvider.react").VideoPlayerPortalingPlaceInfoProvider,{currentPlaceID:e,currentVideoID:f,portalingEnabled:!0,previousPlaceMetaData:l,thisPlaceID:e,children:j.jsx(c("CoreVideoPlayer.react"),babelHelpers["extends"]({},b,{fullscreenController:g,implementations:h,isFullscreen:i,onCoreVideoStatesChanged:k,renderWithCoreVideoStates:p,trackingDataEncrypted:m,trackingNodes:o,viewportMarginsForViewability:a}))})}a.displayName=a.name+" [from "+f.id+"]";function b(a){var b=a.currentPlaceID,c=a.currentVideoID,e=a.previousPlaceMetaData,f=a.renderPlaceholder,g=a.thisPlaceID;a=a.videoPixelsAspectRatio;return j.jsx(d("VideoPlayerPortalingPlaceInfoProvider.react").VideoPlayerPortalingPlaceInfoProvider,{currentPlaceID:b,currentVideoID:c,portalingEnabled:!0,previousPlaceMetaData:e,thisPlaceID:g,children:j.jsx((i||(i=d("VideoPlayerContexts"))).VideoPixelsAspectRatioContext.Provider,{value:a,children:f!=null?f():null})})}b.displayName=b.name+" [from "+f.id+"]";function e(a){var b=a.currentPlaceID,c=a.currentVideoID,e=a.injectCoreVideoStatesRef,f=a.previousPlaceMetaData,g=a.renderComponents;a=a.thisPlaceID;var h=m(null),i=h[0],k=h[1];h=m(null);var n=h[0],o=h[1];l(function(){e.current=function(a,b){a!=null&&o(function(){return a}),k(b)};return function(){e.current=null}},[e]);if(a===b&&i!=null){if(n!=null)throw n;return j.jsx(d("VideoPlayerPortalingPlaceInfoProvider.react").VideoPlayerPortalingPlaceInfoProvider,{currentPlaceID:b,currentVideoID:c,portalingEnabled:!0,previousPlaceMetaData:f,thisPlaceID:a,children:g(i)})}else return null}e.displayName=e.name+" [from "+f.id+"]";g.GlobalVideoPortsPlayerRenderer=a;g.GlobalVideoPortsPlaceholderRenderer=b;g.GlobalVideoPortsVideoComponentsRenderer=e}),98);