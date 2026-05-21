import StandardMenuLayout from '@/Layouts/StandardMenuLayout';
import { useState, useRef } from 'react';
import { Container, Navbar, Nav, Offcanvas, Button, Row, Col, Modal, Carousel, Spinner } from 'react-bootstrap';
import { Head, Link, usePage } from '@inertiajs/react';
import styles from '../../css/welcome.module.css';
import extra_styles from '../../css/extra.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Extra() {
    const { translations, locale } = usePage().props;

    const t = (text) => translations ? (translations[text] || text) : text;

    const [showImageModal, setShowImageModal] = useState(false);
    const [lightboxImageSrc, setLightboxImageSrc] = useState("");
    const [lightboxCaption, setLightboxCaption] = useState("");
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleCloseImageModal = () => {
        setShowImageModal(false);
        setIsFullscreen(false);
    };

    const handleOpenImageModal = (src, caption) => {
        setLightboxImageSrc(src);
        setLightboxCaption(caption);
        setShowImageModal(true);
    };

    const [zoomProps, setZoomProps] = useState({
        show: false,
        x: 0,
        y: 0,
        bgPosX: '0%',
        bgPosY: '0%',
        bgSize: '0px'
    });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - left;
        const y = e.clientY - top;

        const xPercent = (x / width) * 100;
        const yPercent = (y / height) * 100;

        setZoomProps({
            show: true,
            x: x,
            y: y,
            bgPosX: `${xPercent}%`,
            bgPosY: `${yPercent}%`,
            bgSize: `${width * 2}px ${height * 2}px`
        });
    };

    const [isMagnifierEnabled, setIsMagnifierEnabled] = useState(true);


    const mapPhotos = [
        { src: '/images/maps_guides/Harta1921.jpg', alt: t('Noul plan al orașului București 1921'), year: 1921 },
        { src: '/images/maps_guides/Harta1926.jpg', alt: t('Noul plan al orașului București pe anul 1926'), year: 1926 },
        { src: '/images/maps_guides/Harta1931.jpg', alt: t('Municipiul București și împrejurimile 1931'), year: 1931 },
        { src: '/images/maps_guides/Harta1931_STB.png', alt: t('Planul Municipiului București cu liniile de tramvai (STB) 1931'), year: t('1931 (S.T.B)') },
        { src: '/images/maps_guides/Harta1935-1940.jpg', alt: t('Planul Municipiului București 1935'), year: 1935 },
        { src: '/images/maps_guides/Harta1939.jpg', alt: t('Planul Municipiului București 1939'), year: 1939 },
    ];

    const transportGalleryImages = [
        { src: '/images/photos/tramvai_Bratianu.jpg', alt: t("Interwar Bucharest's Iconic Thomson-Houston Tram"), info: t('Thomson-Houston Tram') },
        { src: '/images/photos/tramvai_la_universitate_1923.jpg', alt: t("Early Electric Tram near the University (1923)"), info: t('Early Electric Tram') },
        { src: '/images/photos/tramvai_tras_de_trei_cai_1925.jpg', alt: t("Horse-drawn Tram (1925)"), info: t('Horse-drawn Tram') },
        { src: '/images/photos/autobuz_chevrolet_stb.jpg', alt: t('S.T.B Chevrolet Bus'), info: t('Chevrolet Bus') },
        { src: '/images/photos/autobuz_henschel.jpg', alt: t('S.T.B Henschel Bus'), info: t('Henschel Bus') },
        { src: '/images/photos/autobuz_renault_stb.jpg', alt: t('S.T.B Renault Bus'), info: t('Renault Bus') },
        { src: '/images/maps_guides/afis_tramvaie_STB.jpeg', alt: t('Tram Route Guide'), info: t('Tram routes') },
        { src: '/images/maps_guides/linii_autobuz1934_1.png', alt: t('Bus Route Guide 1934'), info: t('Bus routes (1/3)') },
        { src: '/images/maps_guides/linii_autobuz1934_2.png', alt: t('Bus Route Guide 1934'), info: t('Bus routes (2/3)') },
        { src: '/images/maps_guides/linii_autobuz1934_3.png', alt: t('Bus Route Guide 1934'), info: t('Bus routes (3/3)') },
        { src: '/images/maps_guides/tram_1927.jpg', alt: t('Tram Route Map 1927'), info: t('Tram routes 1927') },
        { src: '/images/maps_guides/circulatie_tarife.png', alt: t('Ticket prices'), info: t('Ticket prices') },
    ];

    const UniformImages = [
        { src: '/images/photos/uniforme_1920.webp', alt: t("Romanian uniforms at the start of the 1920s"), info: t('Early 1920s uniforms') },
        { src: '/images/photos/uniforme_studenti_1920.webp', alt: t("Romanian military school and academy uniforms at the start of the 1920s"), info: t('1920s student uniforms') },
        { src: '/images/photos/uniforma_regimentelor.jpg', alt: t("Romanian uniforms during the 1930s"), info: t('1930s uniforms') },
        { src: '/images/photos/uniforme.jpg', alt: t("Romanian uniform details 1930s"), info: t('1930s uniform details') },
        { src: '/images/photos/uniforma_ofiter_1941.webp', alt: t("Romanian officer uniform from the end of the Interwar Period"), info: t('Late 1930s officer uniform') },
        { src: '/images/photos/replica_uniforma_ofiter_armata.jpg', alt: t("Recreated Romanian Officer uniform from the 1930s/1940s"), info: t('1930s/1940s uniform replica') },
        { src: '/images/photos/tinuta_ceremonie_jandarm.jpg', alt: t("Ceremonial gendarmerie uniform 1930s"), info: t('Gendarmerie ceremony uniform') },
        { src: '/images/photos/politist_gardian_public.jpg', alt: t("Police officer directing traffic 1930s"), info: t('Police officer') }
    ];

    
    const FlagImages = [
        { src: '/images/flags/Drapelul_Romaniei.svg', alt: t("Kingdom of Romania's Flag"), info: t('State flag') },
        { src: '/images/flags/Drapel_de_lupta_1921.svg', alt: t("Romanian army flag during King Ferdinand I's rule, after 1921"), info: t('Army flag') },
    ];

    const royalAnthems = [
        { title: t("Romanian Anthem 1939"), src: "/audio/imnul_regal_1939.mp3" },
        { title: t("Interwar recording of the Royal Anthem"), src: "/audio/TraiascaRegele.mp3" }
    ];

    const artistsMusic = [
        {
            id: 'moscopol',
            name: 'Jean Moscopol',
            image: '/images/artists/Jean_Moscopol.jpg',
            songs: [
                { title: "Vrei să ne întâlnim sâmbătă seară?", src: "/audio/Vrei sa ne intalnim sâmbata seara.mp3" },
                { title: "Te aștept diseară în Cișmigiu", src: "/audio/Te astept diseara in Cismigiu - Jean Moscopol.mp3" },
                { title: "București", src: "/audio/Bucuresti_Jean_Moscopol.mp3" }
            ]
        },
        {
            id: 'vasile',
            name: 'Cristian Vasile',
            image: '/images/artists/Cristian_Vasile2.jpg',
            songs: [
                { title: "Zaraza", src: "/audio/Zaraza - Cristian Vasile.mp3" },
                { title: "Iubesc femeia", src: "/audio/Iubesc femeia - Cristian Vasile.mp3" },
                { title: "Frumoasa mea, eu te ador", src: "/audio/Frumoasa mea, eu te ador - Cristian Vasile.mp3" }
            ]
        },
        {
            id: 'zavaidoc',
            name: 'Zavaidoc',
            image: '/images/artists/Zavaidoc.jpg',
            songs: [
                { title: "Cântecul lui Zavaidoc", src: "/audio/Cantecul lui Zavaidoc - Zavaidoc.mp3" },
                { title: "Dă-mi mâinile să le sărut", src: "/audio/Da mi mainile sa le sarut - Zavaidoc.mp3" },
                { title: "De când ne-a aflat mulțimea", src: "/audio/De cand ne-a aflat multimea - Zavaidoc.mp3" }
            ]
        },
        {
            id: 'tanase',
            name: 'Maria Tănase',
            image: '/images/artists/Maria_Tănase.jpg',
            songs: [
                { title: "Aseară ți-am luat basma", src: "/audio/Aseara ti-am luat basma - Maria Tanase.mp3" },
                { title: "Tiens, tiens, tiens et na!", src: "/audio/Tiens, tiens, tiens et na! - Maria Tanase.mp3" },
                { title: "Bun e vinul ghiurghiuliu", src: "/audio/Bun e vinul ghiurghiuliu - Maria Tanase.mp3" }
            ]
        },
        {
            id: 'gion',
            name: 'Gion (Gheorghe Ionescu)',
            image: '/images/artists/Gion.jpg',
            songs: [
                { title: "Colega noastră", src: "/audio/Colega Noastra - Gion.mp3" },
                { title: "Vecina mea de vis-à-vis", src: "/audio/Vecina mea de vis-a-vis - Gion.mp3" },
                { title: "Adio, doamnă", src: "/audio/Adio, doamna - Gion.mp3" }
            ]
        },
        {
            id: 'botez',
            name: 'Titi Botez',
            image: '/images/artists/Titi_Botez.jpg',
            songs: [
                { title: "Sub balcon eu ți-am cântat o serenadă", src: "/audio/Sub balcon eu ti-am cantat o serenada - Titi Botez.mp3" },
                { title: "Femeia eterna poveste", src: "/audio/Femeia eterna poveste - Titi Botez.mp3" },
                { title: "Nu mă uita", src: "/audio/Nu ma uita - Titi Botez.mp3" }
            ]
        }
    ];

    const audioRef = useRef(null);
    const anthemAudioRef = useRef(null);

    const fadeIntervals = useRef({ artists: null, anthem: null });

    const [globalVolume, setGlobalVolume] = useState(0.5);

    const [currentArtistId, setCurrentArtistId] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songIndices, setSongIndices] = useState({
        moscopol: 0, vasile: 0, zavaidoc: 0, tanase: 0, gion: 0, botez: 0
    });

    const [isPlayingAnthem, setIsPlayingAnthem] = useState(false);
    const [currentAnthemIndex, setCurrentAnthemIndex] = useState(0);

    const fadeOut = (audioElement, intervalKey, callback) => {
        clearInterval(fadeIntervals.current[intervalKey]);
        if (!audioElement || audioElement.paused) {
            if (callback) callback();
            return;
        }

        let step = 20;
        const stepVol = audioElement.volume / 20;

        fadeIntervals.current[intervalKey] = setInterval(() => {
            step--;
            if (step <= 0) {
                clearInterval(fadeIntervals.current[intervalKey]);
                audioElement.pause();
                if (callback) callback();
            } else {
                audioElement.volume = Math.max(0, step * stepVol);
            }
        }, 20);
    };

    const fadeIn = (audioElement, intervalKey) => {
        clearInterval(fadeIntervals.current[intervalKey]);
        if (!audioElement) return;

        audioElement.volume = 0;
        audioElement.play().catch(e => console.log("Loading song"));

        let step = 0;
        const targetVol = globalVolume;
        const stepVol = targetVol / 20;

        fadeIntervals.current[intervalKey] = setInterval(() => {
            step++;
            if (step >= 20) {
                clearInterval(fadeIntervals.current[intervalKey]);
                audioElement.volume = targetVol;
            } else {
                audioElement.volume = Math.min(targetVol, step * stepVol);
            }
        }, 20);
    };

    const handleVolumeChange = (e) => {
        const newVol = parseFloat(e.target.value);
        setGlobalVolume(newVol);
        if (audioRef.current && isPlaying) audioRef.current.volume = newVol;
        if (anthemAudioRef.current && isPlayingAnthem) anthemAudioRef.current.volume = newVol;
    };

    const toggleArtistMusic = (artistId) => {
        if (!audioRef.current) return;

        if (isPlayingAnthem) {
            fadeOut(anthemAudioRef.current, 'anthem');
            setIsPlayingAnthem(false);
        }

        if (currentArtistId === artistId && isPlaying) {
            fadeOut(audioRef.current, 'artists');
            setIsPlaying(false);
        } else {
            if (isPlaying) {
                fadeOut(audioRef.current, 'artists', () => {
                    setCurrentArtistId(artistId);
                    setTimeout(() => fadeIn(audioRef.current, 'artists'), 50);
                });
            } else {
                setCurrentArtistId(artistId);
                setIsPlaying(true);
                setTimeout(() => fadeIn(audioRef.current, 'artists'), 50);
            }
        }
    };

    const changeSong = (artistId, direction) => {
        const updateIndex = () => {
            const artist = artistsMusic.find(a => a.id === artistId);
            setSongIndices(prev => {
                let currentIndex = prev[artistId];
                if (direction === 'next') currentIndex = (currentIndex + 1) % artist.songs.length;
                else currentIndex = (currentIndex - 1 + artist.songs.length) % artist.songs.length;
                return { ...prev, [artistId]: currentIndex };
            });
        };

        if (currentArtistId === artistId && isPlaying) {
            fadeOut(audioRef.current, 'artists', () => {
                updateIndex();
                setTimeout(() => fadeIn(audioRef.current, 'artists'), 50);
            });
        } else {
            updateIndex();
        }
    };

    const toggleAnthemMusic = () => {
        if (!anthemAudioRef.current) return;

        if (isPlaying) {
            fadeOut(audioRef.current, 'artists');
            setIsPlaying(false);
        }

        if (isPlayingAnthem) {
            fadeOut(anthemAudioRef.current, 'anthem');
            setIsPlayingAnthem(false);
        } else {
            setIsPlayingAnthem(true);
            setTimeout(() => fadeIn(anthemAudioRef.current, 'anthem'), 50);
        }
    };

    const changeAnthem = (direction) => {
        const updateIndex = () => {
            let newIndex = currentAnthemIndex;
            if (direction === 'next') newIndex = (currentAnthemIndex + 1) % royalAnthems.length;
            else newIndex = (currentAnthemIndex - 1 + royalAnthems.length) % royalAnthems.length;
            setCurrentAnthemIndex(newIndex);
        };

        if (isPlayingAnthem) {
            fadeOut(anthemAudioRef.current, 'anthem', () => {
                updateIndex();
                setTimeout(() => fadeIn(anthemAudioRef.current, 'anthem'), 50);
            });
        } else {
            updateIndex();
        }
    };

    return (
        <>
            <Head title={t('Extra content')}></Head>
            <StandardMenuLayout>

                <Container className="text-center mt-4 pt-4">
                    <br></br>
                    <h1 className={`mt-3 ${extra_styles.ExtraTitle}`}>{t('Find out even more about')}</h1>
                    <h1 className={`mt-0 ${extra_styles.ExtraTitle}`}>{t('Interwar Bucharest')}</h1>
                    <div className="ps-5 pe-5" style={{ borderBottom: '1.5px solid var(--interwar-ink)', marginTop: '0.1rem', maxWidth: '50%', marginLeft: '25%', marginBottom: '1rem' }}></div>
                </Container>

                <Container fluid className="mt-4 pt-4 overflow-hidden">
                    <Row className="mt-4 justify-content-center gx-4 gx-lg-5">
                        <Col lg={6} className={`d-flex flex-column ${styles.columnDivider}`}>
                            <div className={`${extra_styles.ColumnTitle} mb-0`}>{t("See Bucharest's Interwar layout through maps")}</div>
                            <div className={`${extra_styles.ColumnSubtitle} mb-3`}>{t("Winding streets, small markets, public and cultural buildings, transit routes and parks, all marked on paper")}</div>

                            <div className="py-3">
                                <Row className="g-3">
                                    {mapPhotos.map((image, index) => (
                                        <Col key={index} xs={6} md={6} lg={6}>
                                            <div className={`${extra_styles.MapYearLabel} mb-1`}>{image.year}</div>
                                            <div className={styles.imageContainer}>
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className={`img-fluid rounded ${extra_styles.vintageImageSmall}`}
                                                    loading="lazy"
                                                    onClick={() => handleOpenImageModal(image.src, image.alt)}
                                                />
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>

                            <div className={`${extra_styles.ThickRowBorder} mb-3`}></div>

                            <div className="d-flex justify-content-center align-items-center gap-3 mb-1">
                                <img
                                    src="/images/icons/stema_casei_regale.png"
                                    alt="Stema Regala"
                                    className={extra_styles.royalCrest}
                                />

                                <div className={`${extra_styles.ColumnTitle} mb-0`}>{t("A Royal Bucharest")}</div>

                                <img
                                    src="/images/icons/stema_casei_regale.png"
                                    alt="Stema Regala"
                                    className={extra_styles.royalCrest}
                                />
                            </div>

                            <div className={`${extra_styles.ColumnSubtitle} mb-3 mt-0`}>{t("A brief history of the Romanian Royal Family")}</div>
                            <div className={`${extra_styles.RowBorder} mb-3`}></div>

                            <div className="d-flex justify-content-center align-items-center mb-2">
                                <img
                                    src="/images/kings/Carol_I.jpg"
                                    alt="Carol I"
                                    className={`${extra_styles.KingPortrait}`}
                                />
                            </div>
                            <div className={`${extra_styles.KingName} mb-0`}>{t('King Carol I')}</div>
                            <div className={`${extra_styles.KingPeriod} mb-2`}>{t('1866-1914')}</div>

                            <div className={`${extra_styles.RoyalMainText} mb-1`}>{t("RoyalMainText1")}</div>
                            <div className={`${extra_styles.RoyalMainText} mb-4`}>{t("RoyalMainText2")}</div>


                            <div className="d-flex justify-content-center align-items-center mb-2">
                                <img
                                    src="/images/kings/Ferdinand_I.jpg"
                                    alt="Ferdinand I"
                                    className={`${extra_styles.KingPortrait}`}
                                    style={{
                                        objectPosition: "center top"
                                    }}
                                />
                            </div>
                            <div className={`${extra_styles.KingName} mb-0`}>{t('King Ferdinand I')}</div>
                            <div className={`${extra_styles.KingPeriod} mb-2`}>{t('1914-1927')}</div>

                            <div className={`${extra_styles.RoyalMainText} mb-1`}>{t("RoyalMainText3")}</div>
                            <div className={`${extra_styles.RoyalMainText} mb-2`}>{t("RoyalMainText4")}</div>
                            <div className={`${extra_styles.RoyalMainText} mb-4`}>{t("RoyalMainText5")}</div>

                            <div className="d-flex justify-content-center align-items-center mb-2">
                                <img
                                    src="/images/kings/Carol_II.jpg"
                                    alt="Carol II"
                                    className={`${extra_styles.KingPortrait}`}
                                    style={{
                                        objectPosition: "center top"
                                    }}
                                />
                            </div>
                            <div className={`${extra_styles.KingName} mb-0`}>{t('King Carol II')}</div>
                            <div className={`${extra_styles.KingPeriod} mb-2`}>{t('1930-1940')}</div>

                            <div className={`${extra_styles.RoyalMainText} mb-1`}>{t("RoyalMainText6")}</div>
                            <div className={`${extra_styles.RoyalMainText} mb-1`}>{t("RoyalMainText7")}</div>
                            <div className={`${extra_styles.RoyalMainText} mb-4`}>{t("RoyalMainText8")}</div>

                            <div className="d-flex justify-content-center align-items-center mb-2">
                                <img
                                    src="/images/kings/Mihai_I.jpg"
                                    alt="Mihai I"
                                    className={`${extra_styles.KingPortrait}`}
                                    style={{
                                        objectPosition: "center top"
                                    }}
                                />
                            </div>
                            <div className={`${extra_styles.KingName} mb-0`}>{t('King Michael I')}</div>
                            <div className={`${extra_styles.KingPeriod} mb-2`}>{t('1927-1930 & 1940-1947')}</div>

                            <div className={`${extra_styles.RoyalMainText} mb-1`}>{t("RoyalMainText9")}</div>
                            <div className={`${extra_styles.RoyalMainText} mb-1`}>{t("RoyalMainText10")}</div>
                            <div className={`${extra_styles.RoyalMainText} mb-4`}>{t("RoyalMainText11")}</div>

                            <div className={`${extra_styles.ThickRowBorder} mb-1 mt-4 pt-4`}></div>
                            <div className={`${extra_styles.ColumnTitle} mb-0`}>{t("The Country's symbols")}</div>
                            <div className={`${extra_styles.ColumnSubtitle} mb-3`}>{t("The anthem and the flag")}</div>
                            <div className={`${extra_styles.RowBorder} mb-4`}></div>

                            <div className="py-3">
                                <Row className="g-3">
                                    {FlagImages.map((image, index) => (
                                        <Col key={index} xs={6} md={6} lg={6}>
                                            <div className={`${extra_styles.infoLabel} mb-1`}>{image.info}</div>
                                            <div className={styles.imageContainer}>
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className={`img-fluid rounded ${extra_styles.FlagImage}`}
                                                    loading="lazy"
                                                    onClick={() => handleOpenImageModal(image.src, image.alt)}
                                                />
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>

                            <audio
                                ref={anthemAudioRef}
                                src={royalAnthems[currentAnthemIndex].src}
                                onEnded={() => changeAnthem('next')}
                            />

                            <Container className="mt-4 justify-content-center align-items-start">
                                <Row className="align-items-center mt-1">

                                    <Col lg={6} className={`${extra_styles.AnthemCard} d-flex flex-column`}>
                                        <div className="d-flex flex-column align-items-center">
                                            <div className={`${extra_styles.AnthemContainer}`}></div>

                                            <p className={`${extra_styles.AnthemTitle} mt-3 mb-2`} style={{ position: 'relative', zIndex: 2 }}>
                                                {royalAnthems[currentAnthemIndex].title}
                                            </p>

                                            <div className="d-flex justify-content-center align-items-center gap-3 mt-2">
                                                <Button className={`${extra_styles.PreviousAnthemButton}`} onClick={() => changeAnthem('prev')}></Button>

                                                <Button className={`${extra_styles.MusicButton}`} onClick={toggleAnthemMusic}>
                                                    {isPlayingAnthem ? t('Pause') : t('Play')}
                                                </Button>

                                                <Button className={`${extra_styles.NextAnthemButton}`} onClick={() => changeAnthem('next')}></Button>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={6} className={`${extra_styles.AnthemCard} d-flex flex-column align-items-center`}>
                                        <div className="d-flex flex-column align-items-center">

                                        <div className={`${extra_styles.videoResponsiveContainer}`}>
                                            <iframe
                                                src="https://www.youtube.com/embed/xB7_4ily9vE?si=tzMEsgcZaukWAGum"
                                                title="YouTube video player"
                                                className={extra_styles.vintageYoutubePlayer}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                allowFullScreen
                                            ></iframe>
                                        <div className={`${extra_styles.AnthemTitle} mb-1`}>
                                            {t("Modern rendition of the Romanian Royal Anthem")}
                                        </div>
                                        </div>
                                        </div>
                                    </Col>

                                </Row>
                            </Container>

                        </Col>
                        <Col lg={6} className="d-flex flex-column">

                            <div className={`${extra_styles.ColumnTitle} mb-1`}>{t("Little Paris' public transport")}</div>
                            <div className={`${extra_styles.ColumnSubtitle} mb-1`}>{t("From horse-drawn trams to buses and electric trams")}</div>
                            <div className={`${extra_styles.RowBorder} mb-3`}></div>
                            <div className={`${extra_styles.TransportMainText} mb-0`}>{t("TransportMainText1")}</div>
                            <div className={`${extra_styles.TransportMainText} mb-0`}>{t("TransportMainText2")}</div>
                            <div className={`${extra_styles.TransportMainText} mb-0`}>{t("TransportMainText3")}</div>
                            <div className={`${extra_styles.TransportMainText} mb-4`}>{t("TransportMainText4")}</div>

                            <Carousel fade className={`${styles.vintageCarousel}`} interval={3000}>

                                <Carousel.Item>
                                    <img
                                        className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                        src="/images/photos/langa_banca_nationala.webp"
                                        alt="missing_photo"
                                        onClick={() => handleOpenImageModal("/images/photos/langa_banca_nationala.webp", t('Tram next to the National Bank'))}
                                    />
                                    <Carousel.Caption className={styles.carouselCaption}>
                                        <h5>{t('Tram next to the National Bank')}</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                        src="/images/photos/tramvai-cai-1926.webp"
                                        alt="missing_photo"
                                        onClick={() => handleOpenImageModal("/images/photos/tramvai-cai-1926.webp", t('One of the few remaining horse-drawn trams from 1926'))}
                                    />
                                    <Carousel.Caption className={styles.carouselCaption}>
                                        <h5>{t('Horse-drawn tram')}</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                        src="/images/photos/early_stb_buses.jpg"
                                        alt="missing_photo"
                                        onClick={() => handleOpenImageModal("/images/photos/early_stb_buses.jpg", t('Early S.T.B Buses'))}
                                    />
                                    <Carousel.Caption className={styles.carouselCaption}>
                                        <h5>{t('Early S.T.B Buses')}</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                        src="/images/photos/pasageri_autobuz_chevrolet.jpg"
                                        alt="missing_photo"
                                        onClick={() => handleOpenImageModal("/images/photos/pasageri_autobuz_chevrolet.jpg", t('Passengers boarding a bus'))}
                                    />
                                    <Carousel.Caption className={styles.carouselCaption}>
                                        <h5>{t('Passengers boarding a bus')}</h5>
                                        <div>{t('S.T.B Chevrolet Bus')}</div>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                        src="/images/photos/trafic_cercul_militar.png"
                                        alt="missing_photo"
                                        onClick={() => handleOpenImageModal("/images/photos/trafic_cercul_militar.png", t('Bus and tram near the National Military Circle Palace'))}
                                    />
                                    <Carousel.Caption className={styles.carouselCaption}>
                                        <h5>{t('Bus and tram near the National Military Circle Palace')}</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                        src="/images/photos/atelier_tramvaie.jpg"
                                        alt="missing_photo"
                                        onClick={() => handleOpenImageModal("/images/photos/atelier_tramvaie.jpg", t('Inside a tram workshop 1931'))}
                                    />
                                    <Carousel.Caption className={styles.carouselCaption}>
                                        <h5>{t('Inside a tram workshop')}</h5>
                                        <div>{t('1931')}</div>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                        src="/images/photos/depou_tramvaie_1.webp"
                                        alt="missing_photo"
                                        onClick={() => handleOpenImageModal("/images/photos/depou_tramvaie_1.webp", t('Inside a tram depot'))}
                                    />
                                    <Carousel.Caption className={styles.carouselCaption}>
                                        <h5>{t('Inside a tram depot')}</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                        src="/images/photos/depou_tramvaie_2.webp"
                                        alt="missing_photo"
                                        onClick={() => handleOpenImageModal("/images/photos/depou_tramvaie_1.webp", t('Inside a tram depot'))}
                                    />
                                    <Carousel.Caption className={styles.carouselCaption}>
                                        <h5>{t('Inside a tram depot')}</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                        src="/images/photos/depou_tramvaie_4.webp"
                                        alt="missing_photo"
                                        onClick={() => handleOpenImageModal("/images/photos/depou_tramvaie_4.webp", t('Tram manufacturing and repair depot'))}
                                    />
                                    <Carousel.Caption className={styles.carouselCaption}>
                                        <h5>{t('Tram manufacturing and repair depot')}</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                        src="/images/photos/interior_vagon_tramvai1935.jpg"
                                        alt="missing_photo"
                                        onClick={() => handleOpenImageModal("/images/photos/interior_vagon_tramvai1935.jpg", t('Interior of a tram car 1935'))}
                                    />
                                    <Carousel.Caption className={styles.carouselCaption}>
                                        <h5>{t('Interior of a tram trailer car')}</h5>
                                        <div>{t('1935')}</div>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                        src="/images/photos/pasageri_in_tramvai.jpg"
                                        alt="missing_photo"
                                        onClick={() => handleOpenImageModal("/images/photos/pasageri_in_tramvai.jpg", t('Passengers in a tram'))}
                                    />
                                    <Carousel.Caption className={styles.carouselCaption}>
                                        <h5>{t('Passengers in a tram')}</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                        src="/images/photos/piata_ion_bratianu.jpg"
                                        alt="missing_photo"
                                        onClick={() => handleOpenImageModal("/images/photos/piata_ion_bratianu.jpg", t('Trams turning in I. C. Brătianu Square'))}
                                    />
                                    <Carousel.Caption className={styles.carouselCaption}>
                                        <h5>{t('Trams turning in I. C. Brătianu Square')}</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                        src="/images/photos/langa_blocul_aro.webp"
                                        alt="missing_photo"
                                        onClick={() => handleOpenImageModal("/images/photos/langa_blocul_aro.webp", t('Trams along a boulevard from above'))}
                                    />
                                    <Carousel.Caption className={styles.carouselCaption}>
                                        <h5>{t('Trams along a boulevard from above')}</h5>
                                        <div>{t('I. C. Brătianu Boulevard near Aro Cinema')}</div>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                        src="/images/photos/tramvai1935kogalniceanu.jpg"
                                        alt="missing_photo"
                                        onClick={() => handleOpenImageModal("/images/photos/tramvai1935kogalniceanu.jpg", t('Tram passing through Mihail Kogălniceanu Square'))}
                                    />
                                    <Carousel.Caption className={styles.carouselCaption}>
                                        <h5>{t('Tram passing through Mihail Kogălniceanu Square')}</h5>
                                        <div>{t('1935')}</div>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                        src="/images/photos/piata-victoriei.jpg"
                                        alt="missing_photo"
                                        onClick={() => handleOpenImageModal("/images/photos/piata-victoriei.jpg", t('Trams and buses along Victory Square'))}
                                    />
                                    <Carousel.Caption className={styles.carouselCaption}>
                                        <h5>{t('Trams and buses along Victory Square')}</h5>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className={`d-block w-100 ${styles.carouselImage} ${styles.clickableImage}`}
                                        src="/images/photos/bulevardul-carol-piata-rosetti.webp"
                                        alt="missing_photo"
                                        onClick={() => handleOpenImageModal("/images/photos/bulevardul-carol-piata-rosetti.webp", t('Trams in Rosetti Square'))}
                                    />
                                    <Carousel.Caption className={styles.carouselCaption}>
                                        <h5>{t('Trams in Rosetti Square')}</h5>
                                        <div>{t('King Carol I Boulevard')}</div>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>

                            <div className="py-3">
                                <Row className="g-3">
                                    {transportGalleryImages.map((image, index) => (
                                        <Col key={index} xs={6} md={6} lg={6}>
                                            <div className={`${extra_styles.infoLabel} mb-1`}>{image.info}</div>
                                            <div className={styles.imageContainer}>
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className={`img-fluid rounded ${extra_styles.vintageImageSmall}`}
                                                    loading="lazy"
                                                    onClick={() => handleOpenImageModal(image.src, image.alt)}
                                                />
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>


                            <div className={`${extra_styles.ThickRowBorder} mb-1`}></div>
                            <div className={`${extra_styles.ColumnTitle} mb-0`}>{t("How did an officer dress?")}</div>
                            <div className={`${extra_styles.ColumnSubtitle} mb-3`}>{t("Army uniforms during the 1920s & 1930s and some others")}</div>
                            <div className={`${extra_styles.RowBorder}`}></div>

                            <div className="py-3">
                                <Row className="g-3">
                                    {UniformImages.map((image, index) => (
                                        <Col key={index} xs={6} md={6} lg={6}>
                                            <div className={`${extra_styles.infoLabel} mb-1`}>{image.info}</div>
                                            <div className={styles.imageContainer}>
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className={`img-fluid rounded ${extra_styles.vintageImageSmall}`}
                                                    loading="lazy"
                                                    onClick={() => handleOpenImageModal(image.src, image.alt)}
                                                />
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>

                        </Col>
                    </Row>
                </Container>
                <Container className="mt-4 pt-4">
                    <div className={`${extra_styles.ColumnTitle} mb-0`}>{t("Listen to Bucharest's famous interwar artists")}</div>
                    <div className={`${extra_styles.ColumnSubtitle} mb-3`}>{t("From romantic tangos and western inspired music to local hits and traditional sounds")}</div>

                    <Container className="mt-2 mb-5">
                        <audio
                            ref={audioRef}
                            src={currentArtistId ? artistsMusic.find(a => a.id === currentArtistId).songs[songIndices[currentArtistId]].src : ''}
                            onEnded={() => changeSong(currentArtistId, 'next')}
                        />

                        <div
                            className="mb-4 mt-4"
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr auto 1fr',
                                alignItems: 'center',
                                gap: '15px'
                            }}
                        >
                            <div className={`${extra_styles.VolumeSliderTitle} text-end mb-2`}>
                                {t('Volume')}:
                            </div>

                            <div>
                                <input
                                    type="range"
                                    min="0" max="1" step="0.01"
                                    value={globalVolume}
                                    onChange={handleVolumeChange}
                                    className={`${extra_styles.VolumeSlider}`}
                                />
                            </div>

                            <div></div>
                        </div>

                        <Row className="g-4">
                            {artistsMusic.map(artist => {
                                const currentSongIndex = songIndices[artist.id];
                                const currentSong = artist.songs[currentSongIndex];
                                const isActive = currentArtistId === artist.id;
                                const isSpinning = isActive && isPlaying;

                                return (
                                    <Col md={6} key={artist.id}>
                                        <div className={`${extra_styles.artistCard} text-center`}>
                                            <div
                                                className={`${extra_styles.ArtistImage}`}
                                                style={{ backgroundImage: `url(${artist.image})` }}
                                            ></div>
                                            <div className={`${extra_styles.vinylDiscContainer} ${isSpinning ? extra_styles.spin : ''}`}></div>

                                            <h4 className="mb-0" style={{ fontFamily: 'var(--font-title)', color: 'var(--interwar-ink)', position: 'relative', zIndex: 2 }}>{artist.name}</h4>
                                            <p className={`${extra_styles.SongTitle} mt-0`} style={{ position: 'relative', zIndex: 2 }}>
                                                {currentSong.title}
                                            </p>

                                            <div className="d-flex justify-content-center align-items-center gap-3">
                                                <Button className={`${extra_styles.PreviousSongButton}`} onClick={() => changeSong(artist.id, 'prev')}>
                                                </Button>

                                                <Button className={`${extra_styles.MusicButton}`}
                                                    onClick={() => toggleArtistMusic(artist.id)}
                                                >
                                                    {isSpinning ? t('Pause') : t('Play')}
                                                </Button>

                                                <Button className={`${extra_styles.NextSongButton}`} onClick={() => changeSong(artist.id, 'next')}>
                                                </Button>
                                            </div>
                                        </div>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Container>
                </Container>

                <Modal
                    show={showImageModal}
                    onHide={handleCloseImageModal}
                    size="xl"
                    centered
                    contentClassName={styles.vintageModal}
                >
                    <Modal.Header closeButton style={{ borderBottom: '2px solid var(--interwar-ink)' }}>
                        <Modal.Title className={styles.vintageModalTitle}>
                            {lightboxCaption}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={`d-flex justify-content-center align-items-center ${styles.vintageImageModal}`}>
                        {lightboxImageSrc && (
                            <div style={{ position: 'relative', display: 'inline-block' }}>
                                <img
                                    src={lightboxImageSrc}
                                    alt={lightboxCaption}
                                    className={styles.vintageLightboxImage}
                                />

                                <Button
                                    variant="dark"
                                    size="sm"
                                    onClick={() => setIsFullscreen(true)}
                                    className={styles.fullscreenButton}
                                    title={t("View Fullscreen")}
                                >
                                    ⛶
                                </Button>
                            </div>
                        )}
                    </Modal.Body>
                </Modal>

                {isFullscreen && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.33)',
                        zIndex: 105000,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Button
                            variant="link"
                            onClick={() => setIsFullscreen(false)}
                            className={styles.fullscreenCloseButton}
                        >
                            ✕
                        </Button>

                        {isFullscreen && (
                            <div style={{
                                position: 'fixed',
                                top: 0, left: 0, width: '100vw', height: '100vh',
                                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                                zIndex: 105000, display: 'flex', justifyContent: 'center', alignItems: 'center'
                            }}>
                                <Button
                                    variant="link"
                                    onClick={() => setIsFullscreen(false)}
                                    style={{ position: 'absolute', top: '20px', right: '30px', color: 'var(--interwar-paper)', fontSize: '2rem', textDecoration: 'none', zIndex: 105001 }}
                                >
                                    ✕
                                </Button>

                                <Button
                                    variant="link"
                                    className={`${styles.vintageMagnifierButton} ${isMagnifierEnabled ? styles.magnifierOn : styles.magnifierOff}`}
                                    onClick={() => setIsMagnifierEnabled(!isMagnifierEnabled)}
                                    aria-label={isMagnifierEnabled ? t('Disable Magnifier') : t('Enable Magnifier')}
                                    data-tooltip={isMagnifierEnabled ? t('Disable Magnifier') : t('Enable Magnifier')}
                                >
                                </Button>

                                <div
                                    style={{ position: 'relative', cursor: 'crosshair', display: 'inline-block' }}
                                    onMouseMove={handleMouseMove}
                                    onMouseEnter={() => setZoomProps(prev => ({ ...prev, show: true }))}
                                    onMouseLeave={() => setZoomProps(prev => ({ ...prev, show: false }))}
                                >
                                    <img
                                        src={lightboxImageSrc}
                                        alt={lightboxCaption}
                                        style={{ maxWidth: '95vw', maxHeight: '95vh', objectFit: 'contain', display: 'block' }}
                                    />

                                    {zoomProps.show && isMagnifierEnabled && (
                                        <div className={styles.magnifierGlass}
                                            style={{
                                                left: zoomProps.x - 75,
                                                top: zoomProps.y - 75,
                                                backgroundImage: `url(${lightboxImageSrc})`,
                                                backgroundPosition: `${zoomProps.bgPosX} ${zoomProps.bgPosY}`,
                                                backgroundSize: zoomProps.bgSize,
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                )}

            </StandardMenuLayout>

        </>
    );
} 