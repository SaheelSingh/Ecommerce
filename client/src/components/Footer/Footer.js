import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
    return (
        <footer class="text-gray-600 body-font">
            <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <img src='flipkartLogo.png' alt='logo' className='h-20 w-20' />
                    <span class="ml-3 text-xl">FlipKart</span>
                </a>
                <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 - 2023 FlipKart.com</p>
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a class="text-gray-500">
                        <InstagramIcon />
                    </a>
                    <a class="ml-3 text-gray-500">
                        <TwitterIcon />
                    </a>
                    <a class="ml-3 text-gray-500">
                        <FacebookIcon />
                    </a>
                    <a class="ml-3 text-gray-500">
                        <WhatsAppIcon />
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer
