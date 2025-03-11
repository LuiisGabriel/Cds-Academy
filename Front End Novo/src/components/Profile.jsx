import React from 'react';
import { useUser } from '../lib/customHooks';
import Navbar from './Navbar';

const LandingPage = () => {
      const { user, authenticated } = useUser();
      if (!user || !authenticated) {
        return <div className="p-16 bg-gray-800 h-screen flex justify-center items-center">
          <div className="ml-2 w-8 h-8 border-l-2 rounded-full animate-spin border-white" />
        </div>;
      }
    return (
        <>
            <nav className="sticky top-0 z-50"><Navbar /></nav>
            <div className="p-16 bg-gray-800 h-screen">
                <div className="text-2xl mb-4 font-bold text-white"> Perfil </div>
                {
                    user &&
                    <div className='text-white'>
                        <div className="text-lg text-bold mb-2"> Informações do usuário </div>
                        <div className="flex gap-10">
                            <div className="w-auto font-medium ">
                                <div> Email : </div>
                                <div> Nome : </div>
                                <div> Sobre nome : </div>
                            </div>
                            <div>
                                <div> {user.email} </div>
                                <div> {user.firstname} </div>
                                <div> {user.lastname} </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}
export default LandingPage;