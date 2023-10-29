new Vue({
    el: "#app",
    data() {
        return {
            audio: null,
            circleLeft: null,
            barWidth: null,
            duration: null,
            currentTime: null,
            isTimerPlaying: false,
            tracks: [
                {
                    name: "Energy_Flow",
                    artist: "坂本龍一",
                    cover: "https://mastermao.gitee.io/gallerymusic/00cover/05.jpg",
                    favorited: false,
                    segments: [
                        {
                            title: "Energy_Flow",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Energy_Flow/Energy_Flow_000.flac"
                        },
                        {
                            title: "Energy_Flow",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Energy_Flow/Energy_Flow_001.flac"
                        },
                        {
                            title: "Energy_Flow",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Energy_Flow/Energy_Flow_002.flac"
                        },
                        {
                            title: "Energy_Flow",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Energy_Flow/Energy_Flow_003.flac"
                        },
                        {
                            title: "Energy_Flow",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Energy_Flow/Energy_Flow_004.flac"
                        },
                    ],
                    currentSegmentIndex: 0,
                    preloadedAudios: {},
                },
                {
                    name: "Merry_Christmas_Mr_Lawrence",
                    artist: "坂本龍一",
                    cover: "https://mastermao.gitee.io/gallerymusic/00cover/1996.jpg",
                    favorited: false,
                    segments: [
                        {
                            title: "Merry_Christmas_Mr_Lawrence",
                            source: "https://mastermao.gitee.io/gallerymusic/1996_Merry_Christmas_Mr_Lawrence/Merry_Christmas_Mr_Lawrence_000.flac"
                        },
                        {
                            title: "Merry_Christmas_Mr_Lawrence",
                            source: "https://mastermao.gitee.io/gallerymusic/1996_Merry_Christmas_Mr_Lawrence/Merry_Christmas_Mr_Lawrence_001.flac"
                        },
                        {
                            title: "Merry_Christmas_Mr_Lawrence",
                            source: "https://mastermao.gitee.io/gallerymusic/1996_Merry_Christmas_Mr_Lawrence/Merry_Christmas_Mr_Lawrence_002.flac"
                        },
                        {
                            title: "Merry_Christmas_Mr_Lawrence",
                            source: "https://mastermao.gitee.io/gallerymusic/1996_Merry_Christmas_Mr_Lawrence/Merry_Christmas_Mr_Lawrence_003.flac"
                        },
                        {
                            title: "Merry_Christmas_Mr_Lawrence",
                            source: "https://mastermao.gitee.io/gallerymusic/1996_Merry_Christmas_Mr_Lawrence/Merry_Christmas_Mr_Lawrence_004.flac"
                        },
                    ],
                    currentSegmentIndex: 0,
                    preloadedAudios: {},
                },
                {
                    name: "Rain",
                    artist: "坂本龍一",
                    cover: "https://mastermao.gitee.io/gallerymusic/00cover/1996.jpg",
                    favorited: false,
                    segments: [
                        {
                            title: "Rain",
                            source: "https://mastermao.gitee.io/gallerymusic/1996_Rain/Rain_000.flac"
                        },
                        {
                            title: "Rain",
                            source: "https://mastermao.gitee.io/gallerymusic/1996_Rain/Rain_001.flac"
                        },
                        {
                            title: "Rain",
                            source: "https://mastermao.gitee.io/gallerymusic/1996_Rain/Rain_002.flac"
                        },
                        {
                            title: "Rain",
                            source: "https://mastermao.gitee.io/gallerymusic/1996_Rain/Rain_003.flac"
                        },
                    ],
                    currentSegmentIndex: 0,
                    preloadedAudios: {},
                },
                {
                    name: "The_Last_Emperor",
                    artist: "坂本龍一",
                    cover: "https://mastermao.gitee.io/gallerymusic/00cover/05.jpg",
                    favorited: false,
                    segments: [
                        {
                            title: "The_Last_Emperor",
                            source: "https://mastermao.gitee.io/gallerymusic/05_The_Last_Emperor/The_Last_Emperor_000.flac"
                        },
                        {
                            title: "The_Last_Emperor",
                            source: "https://mastermao.gitee.io/gallerymusic/05_The_Last_Emperor/The_Last_Emperor_001.flac"
                        },
                        {
                            title: "The_Last_Emperor",
                            source: "https://mastermao.gitee.io/gallerymusic/05_The_Last_Emperor/The_Last_Emperor_002.flac"
                        },
                        {
                            title: "The_Last_Emperor",
                            source: "https://mastermao.gitee.io/gallerymusic/05_The_Last_Emperor/The_Last_Emperor_003.flac"
                        },
                        {
                            title: "The_Last_Emperor",
                            source: "https://mastermao.gitee.io/gallerymusic/05_The_Last_Emperor/The_Last_Emperor_004.flac"
                        },
                        {
                            title: "The_Last_Emperor",
                            source: "https://mastermao.gitee.io/gallerymusic/05_The_Last_Emperor/The_Last_Emperor_005.flac"
                        },
                        {
                            title: "The_Last_Emperor",
                            source: "https://mastermao.gitee.io/gallerymusic/05_The_Last_Emperor/The_Last_Emperor_006.flac"
                        },
                    ],
                    currentSegmentIndex: 0,
                    preloadedAudios: {},
                },
                {
                    name: "The_Last_Emperor",
                    artist: "坂本龍一",
                    cover: "https://mastermao.gitee.io/gallerymusic/00cover/1996.jpg",
                    favorited: false,
                    segments: [
                        {
                            title: "The_Last_Emperor",
                            source: "https://mastermao.gitee.io/gallerymusic/1996_The_Last_Emperor/The_Last_Emperor_000.flac"
                        },
                        {
                            title: "The_Last_Emperor",
                            source: "https://mastermao.gitee.io/gallerymusic/1996_The_Last_Emperor/The_Last_Emperor_001.flac"
                        },
                        {
                            title: "The_Last_Emperor",
                            source: "https://mastermao.gitee.io/gallerymusic/1996_The_Last_Emperor/The_Last_Emperor_002.flac"
                        },
                        {
                            title: "The_Last_Emperor",
                            source: "https://mastermao.gitee.io/gallerymusic/1996_The_Last_Emperor/The_Last_Emperor_003.flac"
                        },
                        {
                            title: "The_Last_Emperor",
                            source: "https://mastermao.gitee.io/gallerymusic/1996_The_Last_Emperor/The_Last_Emperor_004.flac"
                        },
                        {
                            title: "The_Last_Emperor",
                            source: "https://mastermao.gitee.io/gallerymusic/1996_The_Last_Emperor/The_Last_Emperor_005.flac"
                        },
                    ],
                    currentSegmentIndex: 0,
                    preloadedAudios: {},
                },
                {
                    name: "Amore",
                    artist: "坂本龍一",
                    cover: "https://mastermao.gitee.io/gallerymusic/00cover/05.jpg",
                    favorited: false,
                    segments: [
                        {
                            title: "Amore",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Amore/Amore_000.flac"
                        },
                        {
                            title: "Amore",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Amore/Amore_001.flac"
                        },
                        {
                            title: "Amore",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Amore/Amore_002.flac"
                        },
                        {
                            title: "Amore",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Amore/Amore_003.flac"
                        },
                        {
                            title: "Amore",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Amore/Amore_004.flac"
                        },
                        {
                            title: "Amore",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Amore/Amore_005.flac"
                        },
                    ],
                    currentSegmentIndex: 0,
                    preloadedAudios: {},
                },
                {
                    name: "Aqua(Instrumental)",
                    artist: "坂本龍一",
                    cover: "https://mastermao.gitee.io/gallerymusic/00cover/UTAU.jpg",
                    favorited: false,
                    segments: [
                        {
                            title: "Aqua(Instrumental)",
                            source: "https://mastermao.gitee.io/gallerymusic/UTAU_Aqua(Instrumental)/Aqua(Instrumental)_000.flac"
                        },
                        {
                            title: "Aqua(Instrumental)",
                            source: "https://mastermao.gitee.io/gallerymusic/UTAU_Aqua(Instrumental)/Aqua(Instrumental)_001.flac"
                        },
                        {
                            title: "Aqua(Instrumental)",
                            source: "https://mastermao.gitee.io/gallerymusic/UTAU_Aqua(Instrumental)/Aqua(Instrumental)_002.flac"
                        },
                        {
                            title: "Aqua(Instrumental)",
                            source: "https://mastermao.gitee.io/gallerymusic/UTAU_Aqua(Instrumental)/Aqua(Instrumental)_003.flac"
                        },
                        {
                            title: "Aqua(Instrumental)",
                            source: "https://mastermao.gitee.io/gallerymusic/UTAU_Aqua(Instrumental)/Aqua(Instrumental)_004.flac"
                        },
                    ],
                    currentSegmentIndex: 0,
                    preloadedAudios: {},
                },
                {
                    name: "Aqua",
                    artist: "坂本龍一",
                    cover: "https://mastermao.gitee.io/gallerymusic/00cover/05.jpg",
                    favorited: false,
                    segments: [
                        {
                            title: "Aqua",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Aqua/Aqua_000.flac"
                        },
                        {
                            title: "Aqua",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Aqua/Aqua_001.flac"
                        },
                        {
                            title: "Aqua",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Aqua/Aqua_002.flac"
                        },
                        {
                            title: "Aqua",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Aqua/Aqua_003.flac"
                        },
                        {
                            title: "Aqua",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Aqua/Aqua_004.flac"
                        },
                        {
                            title: "Aqua",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Aqua/Aqua_005.flac"
                        },
                    ],
                    currentSegmentIndex: 0,
                    preloadedAudios: {},
                },
                {
                    name: "energy_flow",
                    artist: "坂本龍一",
                    cover: "https://mastermao.gitee.io/gallerymusic/00cover/ウラBTTB.jpg",
                    favorited: false,
                    segments: [
                        {
                            title: "energy_flow",
                            source: "https://mastermao.gitee.io/gallerymusic/ウラBTTB_energy_flow/energy_flow_000.flac"
                        },
                        {
                            title: "energy_flow",
                            source: "https://mastermao.gitee.io/gallerymusic/ウラBTTB_energy_flow/energy_flow_001.flac"
                        },
                        {
                            title: "energy_flow",
                            source: "https://mastermao.gitee.io/gallerymusic/ウラBTTB_energy_flow/energy_flow_002.flac"
                        },
                        {
                            title: "energy_flow",
                            source: "https://mastermao.gitee.io/gallerymusic/ウラBTTB_energy_flow/energy_flow_003.flac"
                        },
                        {
                            title: "energy_flow",
                            source: "https://mastermao.gitee.io/gallerymusic/ウラBTTB_energy_flow/energy_flow_004.flac"
                        },
                    ],
                    currentSegmentIndex: 0,
                    preloadedAudios: {},
                },
                {
                    name: "Happyend",
                    artist: "坂本龍一",
                    cover: "https://mastermao.gitee.io/gallerymusic/00cover/05.jpg",
                    favorited: false,
                    segments: [
                        {
                            title: "Happyend",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Happyend/Happyend_000.flac"
                        },
                        {
                            title: "Happyend",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Happyend/Happyend_001.flac"
                        },
                        {
                            title: "Happyend",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Happyend/Happyend_002.flac"
                        },
                        {
                            title: "Happyend",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Happyend/Happyend_003.flac"
                        },
                        {
                            title: "Happyend",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Happyend/Happyend_004.flac"
                        },
                        {
                            title: "Happyend",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Happyend/Happyend_005.flac"
                        },
                    ],
                    currentSegmentIndex: 0,
                    preloadedAudios: {},
                },
                {
                    name: "Ieta",
                    artist: "坂本龍一",
                    cover: "https://mastermao.gitee.io/gallerymusic/00cover/Ieta.jpg",
                    favorited: false,
                    segments: [
                        {
                            title: "Ieta",
                            source: "https://mastermao.gitee.io/gallerymusic/Ieta_Ieta/Ieta_000.flac"
                        },
                        {
                            title: "Ieta",
                            source: "https://mastermao.gitee.io/gallerymusic/Ieta_Ieta/Ieta_001.flac"
                        },
                        {
                            title: "Ieta",
                            source: "https://mastermao.gitee.io/gallerymusic/Ieta_Ieta/Ieta_002.flac"
                        },
                        {
                            title: "Ieta",
                            source: "https://mastermao.gitee.io/gallerymusic/Ieta_Ieta/Ieta_003.flac"
                        },
                    ],
                    currentSegmentIndex: 0,
                    preloadedAudios: {},
                },
                {
                    name: "koko(Instrumental)",
                    artist: "坂本龍一",
                    cover: "https://mastermao.gitee.io/gallerymusic/00cover/UTAU.jpg",
                    favorited: false,
                    segments: [
                        {
                            title: "koko(Instrumental)",
                            source: "https://mastermao.gitee.io/gallerymusic/UTAU_koko(Instrumental)/koko(Instrumental)_000.flac"
                        },
                        {
                            title: "koko(Instrumental)",
                            source: "https://mastermao.gitee.io/gallerymusic/UTAU_koko(Instrumental)/koko(Instrumental)_001.flac"
                        },
                        {
                            title: "koko(Instrumental)",
                            source: "https://mastermao.gitee.io/gallerymusic/UTAU_koko(Instrumental)/koko(Instrumental)_002.flac"
                        },
                        {
                            title: "koko(Instrumental)",
                            source: "https://mastermao.gitee.io/gallerymusic/UTAU_koko(Instrumental)/koko(Instrumental)_003.flac"
                        },
                        {
                            title: "koko(Instrumental)",
                            source: "https://mastermao.gitee.io/gallerymusic/UTAU_koko(Instrumental)/koko(Instrumental)_004.flac"
                        },
                    ],
                    currentSegmentIndex: 0,
                    preloadedAudios: {},
                },
                {
                    name: "Shining_Boy__Little_Randy",
                    artist: "坂本龍一",
                    cover: "https://mastermao.gitee.io/gallerymusic/00cover/05.jpg",
                    favorited: false,
                    segments: [
                        {
                            title: "Shining_Boy__Little_Randy",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Shining_Boy__Little_Randy/Shining_Boy__Little_Randy_000.flac"
                        },
                        {
                            title: "Shining_Boy__Little_Randy",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Shining_Boy__Little_Randy/Shining_Boy__Little_Randy_001.flac"
                        },
                        {
                            title: "Shining_Boy__Little_Randy",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Shining_Boy__Little_Randy/Shining_Boy__Little_Randy_002.flac"
                        },
                        {
                            title: "Shining_Boy__Little_Randy",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Shining_Boy__Little_Randy/Shining_Boy__Little_Randy_003.flac"
                        },
                        {
                            title: "Shining_Boy__Little_Randy",
                            source: "https://mastermao.gitee.io/gallerymusic/05_Shining_Boy__Little_Randy/Shining_Boy__Little_Randy_004.flac"
                        },
                    ],
                    currentSegmentIndex: 0,
                    preloadedAudios: {},
                },
                {
                    name: "Solitude",
                    artist: "坂本龍一",
                    cover: "https://mastermao.gitee.io/gallerymusic/00cover/Ryuichi_Sakamoto_Playing_the_Piano_2013_in_Yokohama.jpg",
                    favorited: false,
                    segments: [
                        {
                            title: "Solitude",
                            source: "https://mastermao.gitee.io/gallerymusic/Ryuichi_Sakamoto_Playing_the_Piano_2013_in_Yokohama_Solitude/Solitude_000.flac"
                        },
                        {
                            title: "Solitude",
                            source: "https://mastermao.gitee.io/gallerymusic/Ryuichi_Sakamoto_Playing_the_Piano_2013_in_Yokohama_Solitude/Solitude_001.flac"
                        },
                        {
                            title: "Solitude",
                            source: "https://mastermao.gitee.io/gallerymusic/Ryuichi_Sakamoto_Playing_the_Piano_2013_in_Yokohama_Solitude/Solitude_002.flac"
                        },
                        {
                            title: "Solitude",
                            source: "https://mastermao.gitee.io/gallerymusic/Ryuichi_Sakamoto_Playing_the_Piano_2013_in_Yokohama_Solitude/Solitude_003.flac"
                        },
                        {
                            title: "Solitude",
                            source: "https://mastermao.gitee.io/gallerymusic/Ryuichi_Sakamoto_Playing_the_Piano_2013_in_Yokohama_Solitude/Solitude_004.flac"
                        },
                        {
                            title: "Solitude",
                            source: "https://mastermao.gitee.io/gallerymusic/Ryuichi_Sakamoto_Playing_the_Piano_2013_in_Yokohama_Solitude/Solitude_005.flac"
                        },
                    ],
                    currentSegmentIndex: 0,
                    preloadedAudios: {},
                },
                {
                    name: "The_Last_Empero(Theme_Variation_II)",
                    artist: "坂本龍一",
                    cover: "https://mastermao.gitee.io/gallerymusic/00cover/The_Last_Emperor.jpg",
                    favorited: false,
                    segments: [
                        {
                            title: "The_Last_Empero(Theme_Variation_II)",
                            source: "https://mastermao.gitee.io/gallerymusic/The_Last_Emperor_The_Last_Empero(Theme_Variation_II)/The_Last_Empero(Theme_Variation_II)_000.flac"
                        },
                        {
                            title: "The_Last_Empero(Theme_Variation_II)",
                            source: "https://mastermao.gitee.io/gallerymusic/The_Last_Emperor_The_Last_Empero(Theme_Variation_II)/The_Last_Empero(Theme_Variation_II)_001.flac"
                        },
                        {
                            title: "The_Last_Empero(Theme_Variation_II)",
                            source: "https://mastermao.gitee.io/gallerymusic/The_Last_Emperor_The_Last_Empero(Theme_Variation_II)/The_Last_Empero(Theme_Variation_II)_002.flac"
                        },
                    ],
                    currentSegmentIndex: 0,
                    preloadedAudios: {},
                },
                {
                    name: "The_Last_Emperor(Theme)",
                    artist: "坂本龍一",
                    cover: "https://mastermao.gitee.io/gallerymusic/00cover/The_Last_Emperor.jpg",
                    favorited: false,
                    segments: [
                        {
                            title: "The_Last_Emperor(Theme)",
                            source: "https://mastermao.gitee.io/gallerymusic/The_Last_Emperor_The_Last_Emperor(Theme)/The_Last_Emperor(Theme)_000.flac"
                        },
                        {
                            title: "The_Last_Emperor(Theme)",
                            source: "https://mastermao.gitee.io/gallerymusic/The_Last_Emperor_The_Last_Emperor(Theme)/The_Last_Emperor(Theme)_001.flac"
                        },
                        {
                            title: "The_Last_Emperor(Theme)",
                            source: "https://mastermao.gitee.io/gallerymusic/The_Last_Emperor_The_Last_Emperor(Theme)/The_Last_Emperor(Theme)_002.flac"
                        },
                        {
                            title: "The_Last_Emperor(Theme)",
                            source: "https://mastermao.gitee.io/gallerymusic/The_Last_Emperor_The_Last_Emperor(Theme)/The_Last_Emperor(Theme)_003.flac"
                        },
                        {
                            title: "The_Last_Emperor(Theme)",
                            source: "https://mastermao.gitee.io/gallerymusic/The_Last_Emperor_The_Last_Emperor(Theme)/The_Last_Emperor(Theme)_004.flac"
                        },
                        {
                            title: "The_Last_Emperor(Theme)",
                            source: "https://mastermao.gitee.io/gallerymusic/The_Last_Emperor_The_Last_Emperor(Theme)/The_Last_Emperor(Theme)_005.flac"
                        },
                    ],
                    currentSegmentIndex: 0,
                    preloadedAudios: {},
                },
                {
                    name: "aqua",
                    artist: "坂本龍一",
                    cover: "https://mastermao.gitee.io/gallerymusic/00cover/BTTB.jpg",
                    favorited: false,
                    segments: [
                        {
                            title: "aqua",
                            source: "https://mastermao.gitee.io/gallerymusic/BTTB_aqua/aqua_000.flac"
                        },
                        {
                            title: "aqua",
                            source: "https://mastermao.gitee.io/gallerymusic/BTTB_aqua/aqua_001.flac"
                        },
                        {
                            title: "aqua",
                            source: "https://mastermao.gitee.io/gallerymusic/BTTB_aqua/aqua_002.flac"
                        },
                        {
                            title: "aqua",
                            source: "https://mastermao.gitee.io/gallerymusic/BTTB_aqua/aqua_003.flac"
                        },
                        {
                            title: "aqua",
                            source: "https://mastermao.gitee.io/gallerymusic/BTTB_aqua/aqua_004.flac"
                        },
                    ],
                    currentSegmentIndex: 0,
                    preloadedAudios: {},
                },
                {
                    name: "opus",
                    artist: "坂本龍一",
                    cover: "https://mastermao.gitee.io/gallerymusic/00cover/BTTB.jpg",
                    favorited: false,
                    segments: [
                        {
                            title: "opus",
                            source: "https://mastermao.gitee.io/gallerymusic/BTTB_opus/opus_000.flac"
                        },
                        {
                            title: "opus",
                            source: "https://mastermao.gitee.io/gallerymusic/BTTB_opus/opus_001.flac"
                        },
                        {
                            title: "opus",
                            source: "https://mastermao.gitee.io/gallerymusic/BTTB_opus/opus_002.flac"
                        },
                        {
                            title: "opus",
                            source: "https://mastermao.gitee.io/gallerymusic/BTTB_opus/opus_003.flac"
                        },
                        {
                            title: "opus",
                            source: "https://mastermao.gitee.io/gallerymusic/BTTB_opus/opus_004.flac"
                        },
                    ],
                    currentSegmentIndex: 0,
                    preloadedAudios: {},
                },
                {
                    name: "andata(Electric_Youth_Remix)",
                    artist: "坂本龍一",
                    cover: "https://mastermao.gitee.io/gallerymusic/00cover/andata.jpg",
                    favorited: false,
                    segments: [
                        {
                            title: "andata(Electric_Youth_Remix)",
                            source: "https://mastermao.gitee.io/gallerymusic/andata_andata(Electric_Youth_Remix)/andata(Electric_Youth_Remix)_000.flac"
                        },
                        {
                            title: "andata(Electric_Youth_Remix)",
                            source: "https://mastermao.gitee.io/gallerymusic/andata_andata(Electric_Youth_Remix)/andata(Electric_Youth_Remix)_001.flac"
                        },
                        {
                            title: "andata(Electric_Youth_Remix)",
                            source: "https://mastermao.gitee.io/gallerymusic/andata_andata(Electric_Youth_Remix)/andata(Electric_Youth_Remix)_002.flac"
                        },
                        {
                            title: "andata(Electric_Youth_Remix)",
                            source: "https://mastermao.gitee.io/gallerymusic/andata_andata(Electric_Youth_Remix)/andata(Electric_Youth_Remix)_003.flac"
                        },
                        {
                            title: "andata(Electric_Youth_Remix)",
                            source: "https://mastermao.gitee.io/gallerymusic/andata_andata(Electric_Youth_Remix)/andata(Electric_Youth_Remix)_004.flac"
                        },
                        {
                            title: "andata(Electric_Youth_Remix)",
                            source: "https://mastermao.gitee.io/gallerymusic/andata_andata(Electric_Youth_Remix)/andata(Electric_Youth_Remix)_005.flac"
                        },
                    ],
                    currentSegmentIndex: 0,
                    preloadedAudios: {},
                },
            ],
            currentTrackIndex: 0,
            currentSegmentIndex: 0,
            transitionName: null
        };
    },
    computed:
        {
            currentTrack() {
                return this.tracks[this.currentTrackIndex];
            }
            ,
            currentSegment() {
                return this.currentTrack.segments[this.currentSegmentIndex];
            }
            ,
        }
    ,
    methods: {
        play() {
            if (this.audio.paused) {
                this.audio.play();
                this.isTimerPlaying = true;
            } else {
                this.audio.pause();
                this.isTimerPlaying = false;
            }
        }
        ,
        generateTime() {
            let width = (100 / this.audio.duration) * (this.audio.currentTime);
            this.barWidth = width + "%";
            this.circleLeft = width + "%";
            let durmin = Math.floor(this.audio.duration / 60);
            let dursec = Math.floor(this.audio.duration - durmin * 60);
            let curmin = Math.floor(this.audio.currentTime / 60);
            let cursec = Math.floor(this.audio.currentTime - curmin * 60);
            // console.log(cursec)
            if (durmin < 10) {
                durmin = "0" + durmin;
            }
            if (dursec < 10) {
                dursec = "0" + dursec;
            }
            if (curmin < 10) {
                curmin = "0" + curmin;
            }
            if (cursec < 10) {
                cursec = "0" + cursec;
            }
            this.duration = durmin + ":" + dursec;
            this.currentTime = curmin + ":" + cursec;
        }
        ,
        updateBar(x) {
            let progress = this.$refs.progress;
            let maxduration = this.audio.duration;
            let position = x - progress.offsetLeft;
            let percentage = (100 * position) / progress.offsetWidth;
            if (percentage > 100) {
                percentage = 100;
            }
            if (percentage < 0) {
                percentage = 0;
            }

            const tmp = (maxduration * percentage) / 100;
            const newSegmentIndex = Math.floor(tmp / 60);
            if (newSegmentIndex != this.currentSegmentIndex) {
                this.currentSegmentIndex = newSegmentIndex;
                if (this.currentTrack.preloadedAudios[this.currentSegmentIndex]) {
                    this.audio = this.currentTrack.preloadedAudios[this.currentSegmentIndex];
                    this.currentTrack.preloadedAudios[this.currentSegmentIndex] = null;
                } else {
                    this.audio.src = this.currentSegment.source;
                }
                this.loadNextSegment();
            }

            this.barWidth = percentage + "%";
            this.circleLeft = percentage + "%";
            this.audio.currentTime = tmp;
            setTimeout(() => {
                if (this.isTimerPlaying) {
                    this.audio.play();
                } else {
                    this.audio.pause();
                }
            }, 300);
        }
        ,

        clickProgress(e) {
            this.isTimerPlaying = true;
            this.audio.pause();
            this.updateBar(e.pageX);
            let vm = this;
            this.audio.ontimeupdate = function () {
                vm.generateTime();
            };
            this.audio.onloadedmetadata = function () {
                vm.generateTime();
            };
        }
        ,
        prevTrack() {
            this.transitionName = "scale-in";
            this.isShowCover = false;
            if (this.currentTrackIndex > 0) {
                this.currentSegmentIndex = 0;
                this.currentTrackIndex--;
            } else {
                this.currentTrackIndex = this.tracks.length - 1;
                this.currentSegmentIndex = 0;
            }
            // this.currentTrack = this.tracks[this.currentTrackIndex];
            this.resetPlayer();
        }
        ,
        nextTrack() {
            this.transitionName = "scale-out";
            this.isShowCover = false;
            if (this.currentTrackIndex < this.tracks.length - 1) {
                this.currentTrackIndex++;
                this.currentSegmentIndex = 0;
            } else {
                this.currentTrackIndex = 0;
                this.currentSegmentIndex = 0;
            }
            // this.currentTrack = this.tracks[this.currentTrackIndex];
            this.loadNextSegment();
            this.resetPlayer();
        }
        ,
        nextSegment() {
            this.isShowCover = false;
            this.currentSegmentIndex++;
            if (this.currentSegmentIndex < this.currentTrack.segments.length - 1) {
                this.loadNextSegment();
            }
            this.audio.pause();
            if (this.currentTrack.preloadedAudios[this.currentSegmentIndex]) {
                this.audio = this.currentTrack.preloadedAudios[this.currentSegmentIndex];
                this.currentTrack.preloadedAudios[this.currentSegmentIndex] = null;
            } else {
                this.audio.src = this.currentSegment.source;
            }
            let vm = this;
            this.audio.ontimeupdate = function () {
                vm.generateTime();
            };
            this.audio.onloadedmetadata = function () {
                vm.generateTime();
            };

            this.audio.onended = () => {
                if (vm.currentSegmentIndex == vm.currentTrack.segments.length - 1) {
                    console.log('下一曲', vm.currentSegmentIndex);
                    vm.nextTrack();
                } else {
                    vm.nextSegment();
                    console.log('下一片段');
                }
                this.isTimerPlaying = true;
            };

            this.audio.play();
        }
        ,
        loadNextSegment() {
            const nextSegmentIndex = this.currentSegmentIndex + 1;
            const nextFlac = this.currentTrack.segments[nextSegmentIndex];
            if (!this.currentTrack.preloadedAudios[nextSegmentIndex]) {
                const audio = new Audio();
                audio.src = nextFlac.source;
                audio.preload = 'auto';
                audio.load();
                this.currentTrack.preloadedAudios[nextSegmentIndex] = audio;
            }
        }
        ,
        resetPlayer() {
            this.barWidth = 0;
            this.circleLeft = 0;
            this.audio.src = this.currentSegment.source;
            console.log(this.audio.src);
            this.audio.currentTime = 0;
            setTimeout(() => {
                if (this.isTimerPlaying) {
                    this.audio.play();
                } else {
                    this.audio.pause();
                }
            }, 300);
        },
        favorite() {
            this.tracks[this.currentTrackIndex].favorited = !this.tracks[
                this.currentTrackIndex
                ].favorited;
        }
    },

    created() {
        let vm = this;
        // this.currentTrack = this.tracks[0];
        this.audio = new Audio();
        this.audio.src = this.currentSegment.source;
        this.loadNextSegment();

        this.audio.ontimeupdate = function () {
            vm.generateTime();
        };
        this.audio.onloadedmetadata = function () {
            vm.generateTime();
        };
        this.audio.onended = () => {
            if (vm.currentSegmentIndex == vm.currentTrack.segments.length - 1) {
                console.log('下一曲');
                vm.nextTrack();
            } else {
                vm.nextSegment();
                console.log('下一片段');
            }
            this.isTimerPlaying = true;
        };
        // this is optional (for preload covers)
        for (let index = 0; index < this.tracks.length; index++) {
            const element = this.tracks[index];
            let link = document.createElement('link');
            link.rel = "prefetch";
            link.href = element.cover;
            link.as = "image"
            document.head.appendChild(link)
        }
    },
})
;