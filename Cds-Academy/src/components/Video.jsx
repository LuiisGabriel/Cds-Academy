
import { useQuery } from '@apollo/client';
import { getVideos } from '../graphQl/Querys';
import ReactPlayer from 'react-player';
import { useCallback, useEffect, useState } from 'react';

const Video = () => {
    const pathname = location.pathname.split('/');
    const ambiente = pathname[1];
    const modulo = pathname[2];
    const subModulo = pathname[3];
    const [length, setLength] = useState(0);
    const { loading, error, data } = useQuery(getVideos, { variables: { modulo, subModulo, ambiente } });
    const [playedTime, setPlayedTime] = useState(0);
    const [watched, setWatched] = useState(0);
    const [condicao, setCondicao] = useState('inapto');

    if (loading) {
        return (
            <div className="p-16 bg-gray-300 h-screen flex justify-center items-center">
                <div className="ml-2 w-8 h-8 border-l-2 rounded-full animate-spin border-white" />
            </div>
        )
    }
    if (error) {
        return alert('Ocorreu um problema ao carregar os vídeos!!!');
    }

    function handleCondicao() {
        if (watched >= length && playedTime >= 15) {
            setCondicao('apto');
        }
        else {
            return;
        }
    }

    function handleLength() {
        setLength(data.videos.map(() => { }).length);
    }

    function handleProgress(progress) {
        if (!progress.seeking) {
            setPlayedTime(playedTime + 1);
        }

    }

    function handleEnded() {

        setWatched(watched + 1);
    }

    return (
        <>
            <nav className="sticky top-0 z-50"><Navbar /></nav>
            length: {length}
            <div className="bg-gray-300 flex flex-col items-center pt-16">
                <div className=" sm:text-5xl pb-10 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                        Bem-vindo ao treinamento de {subModulo} do módulo {modulo}
                    </h1>
                </div>
                <div className=" sm:text-4xl pb-4 w-2/3 text-center pb-16">
                    <h1 className="text-3xl font-normal tracking-tight text-gray-700">
                        Aqui você vai encontrar os treinamentos necessários para utilizar os cadastros de retaguarda do sistema CDS.
                    </h1>
                </div>
                <h1>you watched {watched} videos</h1>
                <h1>you watched {playedTime} seconds </h1>
                <h1>você está {condicao} para realizar a prova!!</h1>

                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
                    <h2 className="sr-only">Videos</h2>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 xl:gap-x-1 gap-y-50">
                        
                            {data.videos.map((video) => (
                                <div className="h-150" id='teste'>
                                    <ReactPlayer
                                        url={video.url}
                                        width='100%'
                                        height='100%'
                                        onEnded={handleEnded}
                                        onProgress={handleProgress}
                                        controls={true}
                                    />
                                    <h3>{propTypesSlideRef}</h3>
                                    <h3 className="mt-4 text-xl ">{video.titulo}</h3>
                                    <h3 className="mt-4 text-xl">{video.id}</h3>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Video;