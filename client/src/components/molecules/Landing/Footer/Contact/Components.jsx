import { Title } from '../../../../atoms/Title';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Components = () => {
    return (
        <div>
            <div className='pb-2'>
                <Title variant="footerTitle" value="Contact" />
            </div>
            <ul className="space-y-4 mt-4">
                <li>
                    <a
                        href="#"
                        className="flex items-center space-x-3 text-neutral-700 hover:text-blue-600 transition-colors duration-300"
                    >
                        <PlaceIcon className="text-blue-500" />
                        <span className="text-lg font-medium">Dehradun, Uttarakhand</span>
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:velox@gmail.com"
                        className="flex items-center space-x-3 text-neutral-700 hover:text-blue-600 transition-colors duration-300"
                    >
                        <EmailIcon className="text-blue-500" />
                        <span className="text-lg font-medium">velox@gmail.com</span>
                    </a>
                </li>
                <li>
                    <a
                        href="tel:+910000000000"
                        className="flex items-center space-x-3 text-neutral-700 hover:text-blue-600 transition-colors duration-300"
                    >
                        <PhoneIcon className="text-blue-500" />
                        <span className="text-lg font-medium">+91 000 000 0000</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Components;
