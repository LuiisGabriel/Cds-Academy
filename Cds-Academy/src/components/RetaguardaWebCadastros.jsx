
import Navbar from './Navbar';
import { useQuery } from '@apollo/client';
import { getVideos } from '../graphQl/Querys';
import { useUser } from '../lib/customHooks';
import ReactPlayer from 'react-player';
import { useState, useEffect} from 'react';

const RetaguardaWebCadastros = () => {
    const { user, authenticated } = useUser();
    const pathname = location.pathname.split('/');
    let assistidos = 0;
    const ambiente = pathname[1];
    const modulo = pathname[2];
    const subModulo = pathname[3];
    const { loading, error, data } = useQuery(getVideos, { variables: { modulo, subModulo, ambiente } });

    const handleEnded = () => {
            assistidos ++,
            console.log(assistidos)
      }

    if (!user || !authenticated) {
        return <div className="p-16 bg-gray-300 h-screen flex justify-center items-center">
            <div className="ml-2 w-8 h-8 border-l-2 rounded-full animate-spin border-white" />
        </div>;
    }

    if (loading) {
        return (
            <div className="p-16 bg-gray-800 h-screen flex justify-center items-center">
                <div className="text-2xl mb-4 font-bold text-white">Carregando</div>
                <div className="ml-2 w-8 h-8 border-l-2 rounded-full animate-spin border-white" />
            </div>
        )
    }
    if (error) {
        return alert('Ocorreu um problema ao carregar os vídeos!!!');
    }

    return (
        <>
            <nav className="sticky top-0 z-50"><Navbar /></nav>
            <div className="bg-gray-300">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
                    <h2 className="sr-only">Videos</h2>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 xl:gap-x-1 gap-y-50">
                        {data.videos.map((video) => (
                            <a className="h-150">
                                <ReactPlayer 
                                url={video.url} 
                                width='100%'
                                height='100%'
                                onEnded={handleEnded}
                                controls={false}
                                />                                
                                <h3 className="mt-4 text-xl text-gray-700">{video.titulo}</h3>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
export default RetaguardaWebCadastros;