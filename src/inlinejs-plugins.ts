import {
    GetGlobal,
    WaitForGlobal,
    AnimationCreatorCallbackType,
    IAnimationActorCallbackDetails,
    IAnimationEaseCallbackDetails
} from '@benbraide/inlinejs';

import {
    AnimationConcept,
    BackAnimationEase,
    BackInAnimationEase,
    BackOutAnimationEase,
    BackInOutAnimationEase,
    BounceAnimationEase,
    BounceInAnimationEase,
    BounceOutAnimationEase,
    BounceInOutAnimationEase,
    CircleAnimationEase,
    CircleInAnimationEase,
    CircleOutAnimationEase,
    CircleInOutAnimationEase,
    CubicAnimationEase,
    CubicInAnimationEase,
    CubicOutAnimationEase,
    CubicInOutAnimationEase,
    ElasticAnimationEase,
    ElasticInAnimationEase,
    ElasticOutAnimationEase,
    ElasticInOutAnimationEase,
    ExponentialAnimationEase,
    ExponentialInAnimationEase,
    ExponentialOutAnimationEase,
    ExponentialInOutAnimationEase,
    QuadraticAnimationEase,
    QuadraticInAnimationEase,
    QuadraticOutAnimationEase,
    QuadraticInOutAnimationEase,
    QuartAnimationEase,
    QuartInAnimationEase,
    QuartOutAnimationEase,
    QuartInOutAnimationEase,
    QuintAnimationEase,
    QuintInAnimationEase,
    QuintOutAnimationEase,
    QuintInOutAnimationEase,
    SineAnimationEase,
    SineInAnimationEase,
    SineOutAnimationEase,
    SineInOutAnimationEase,
    DefaultAnimationEase,
    LinearAnimationEase,
    DefaultAnimationActor,
    NullAnimationActor,
    OpacityAnimationActor,
    WidthAnimationActor,
    HeightAnimationActor,
    ZoomAnimationActor,
    SlideDownAnimationActor,
    SlideLeftAnimationActor,
    SlideRightAnimationActor,
    SlideUpAnimationActor,
    SpinAnimationActor,
    FlipAnimationActor,
    TossAnimationActor,
    PulseAnimationActor,
    HeartbeatAnimationActor,
    BezierAnimationEaseCreator,
    ScaleAnimationCreator,
    TranslateAnimationCreator,
    RotateAnimationCreator,
    SceneAnimationCreator,
    ShakeAnimationCreator,
    VibrateAnimationCreator,
    RubberbandAnimationCreator,
    JelloAnimationCreator,
    TadaAnimationCreator,
    SwingAnimationCreator,
    TransitionDirectiveHandlerCompact,
    AnimateDirectiveHandlerCompact,
    AnimationMagicHandlerCompact
} from '@benbraide/inlinejs-animation';

import {
    CartCollectionConcept,
    FavoritesCollectionConcept,
    CartDirectiveHandlerCompact,
    FavoritesDirectiveHandlerCompact,
    CartMagicHandlerCompact,
    FavoritesMagicHandlerCompact
} from '@benbraide/inlinejs-collections';

import {
    MomentConceptName,
    MomentConcept,
    MomentDirectiveHandlerCompact,
    MomentMagicHandlerCompact
} from '@benbraide/inlinejs-moment';

import {
    AlertConcept,
    AlertMagicHandlerCompact
} from '@benbraide/inlinejs-alert';

import {
    RouterConceptName,
    RouterConcept,
    RouterDirectiveHandlerCompact,
    FetchRouterDirectiveExtensionCompact,
    MountRouterDirectiveExtensionCompact,
    LinkRouterDirectiveExtensionCompact,
    PageRouterDirectiveExtensionCompact,
    RouterMagicHandlerCompact
} from '@benbraide/inlinejs-router';

import {
    ScreenConceptName,
    ScreenConcept,
    ScreenMagicHandlerCompact
} from '@benbraide/inlinejs-screen';

WaitForGlobal().then(() => {
    //Begin: inlinejs-animation
    
    let concept = new AnimationConcept(), easings = concept.GetEaseCollection(), actors = concept.GetActorCollection(), creators = concept.GetCreatorCollection();

    let addEase = (info: IAnimationEaseCallbackDetails) => easings.Add(info.callback, info.name);
    let addActor = (info: IAnimationActorCallbackDetails) => actors.Add(info.callback, info.name);
    let addCreator = (name: string, callback: AnimationCreatorCallbackType) => creators.Add(name, callback);
    
    addEase(BackAnimationEase);
    addEase(BackInAnimationEase);
    addEase(BackOutAnimationEase);
    addEase(BackInOutAnimationEase);

    addEase(BounceAnimationEase);
    addEase(BounceInAnimationEase);
    addEase(BounceOutAnimationEase);
    addEase(BounceInOutAnimationEase);

    addEase(CircleAnimationEase);
    addEase(CircleInAnimationEase);
    addEase(CircleOutAnimationEase);
    addEase(CircleInOutAnimationEase);

    addEase(CubicAnimationEase);
    addEase(CubicInAnimationEase);
    addEase(CubicOutAnimationEase);
    addEase(CubicInOutAnimationEase);

    addEase(ElasticAnimationEase);
    addEase(ElasticInAnimationEase);
    addEase(ElasticOutAnimationEase);
    addEase(ElasticInOutAnimationEase);

    addEase(ExponentialAnimationEase);
    addEase(ExponentialInAnimationEase);
    addEase(ExponentialOutAnimationEase);
    addEase(ExponentialInOutAnimationEase);

    addEase(QuadraticAnimationEase);
    addEase(QuadraticInAnimationEase);
    addEase(QuadraticOutAnimationEase);
    addEase(QuadraticInOutAnimationEase);

    addEase(QuartAnimationEase);
    addEase(QuartInAnimationEase);
    addEase(QuartOutAnimationEase);
    addEase(QuartInOutAnimationEase);

    addEase(QuintAnimationEase);
    addEase(QuintInAnimationEase);
    addEase(QuintOutAnimationEase);
    addEase(QuintInOutAnimationEase);

    addEase(SineAnimationEase);
    addEase(SineInAnimationEase);
    addEase(SineOutAnimationEase);
    addEase(SineInOutAnimationEase);

    addEase(DefaultAnimationEase);
    addEase(LinearAnimationEase);

    addActor(DefaultAnimationActor);
    addActor(NullAnimationActor);
    addActor(OpacityAnimationActor);

    addActor(WidthAnimationActor);
    addActor(HeightAnimationActor);
    addActor(ZoomAnimationActor);

    addActor(SlideDownAnimationActor);
    addActor(SlideLeftAnimationActor);
    addActor(SlideRightAnimationActor);
    addActor(SlideUpAnimationActor);

    addActor(SpinAnimationActor);
    addActor(FlipAnimationActor);
    addActor(TossAnimationActor);

    addActor(PulseAnimationActor);
    addActor(HeartbeatAnimationActor);

    addCreator('bezier', BezierAnimationEaseCreator);
    
    addCreator('scale', ScaleAnimationCreator);
    addCreator('translate', TranslateAnimationCreator);
    addCreator('rotate', RotateAnimationCreator);
    addCreator('scene', SceneAnimationCreator);

    addCreator('shake', ShakeAnimationCreator);
    addCreator('vibrate', VibrateAnimationCreator);
    addCreator('rubberband', RubberbandAnimationCreator);
    addCreator('jello', JelloAnimationCreator);
    addCreator('tada', TadaAnimationCreator);
    addCreator('swing', SwingAnimationCreator);
    
    GetGlobal().SetConcept('animation', concept);
    
    TransitionDirectiveHandlerCompact();
    AnimateDirectiveHandlerCompact();
    AnimationMagicHandlerCompact();

    //End: inlinejs-animation


    //Begin: inlinejs-collections

    const cartCollection = new CartCollectionConcept(GetGlobal().CreateComponent(document.createElement('template')));
    const favCollection = new FavoritesCollectionConcept(GetGlobal().CreateComponent(document.createElement('template')));
    
    GetGlobal().SetConcept(cartCollection.GetName(), cartCollection);
    GetGlobal().SetConcept(favCollection.GetName(), favCollection);

    CartDirectiveHandlerCompact();
    FavoritesDirectiveHandlerCompact();

    CartMagicHandlerCompact();
    FavoritesMagicHandlerCompact();

    //End: inlinejs-collections
    

    //Begin: inlinejs-moment

    GetGlobal().SetConcept(MomentConceptName, new MomentConcept());
    MomentDirectiveHandlerCompact();
    MomentMagicHandlerCompact();
    
    //End: inlinejs-moment


    //Begin: inlinejs-router

    GetGlobal().SetConcept(RouterConceptName, new RouterConcept());

    RouterDirectiveHandlerCompact();
    FetchRouterDirectiveExtensionCompact();
    MountRouterDirectiveExtensionCompact();
    LinkRouterDirectiveExtensionCompact();
    PageRouterDirectiveExtensionCompact();

    RouterMagicHandlerCompact();
    
    //End: inlinejs-router


    //Begin: inlinejs-screen

    GetGlobal().SetConcept(ScreenConceptName, new ScreenConcept(GetGlobal().CreateComponent(document.createElement('template'))));
    ScreenMagicHandlerCompact();
    
    //End: inlinejs-screen


    //Begin: inlinejs-alert
    
    GetGlobal().SetConcept('alert', new AlertConcept);
    AlertMagicHandlerCompact();

    //End: inlinejs-alert
});
