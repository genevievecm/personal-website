// brush functions
import { sparkles } from './brushes/sparkles';
import { creative } from './brushes/creative';
import { collab } from './brushes/collab';
import { pawprints } from './brushes/pawprints';

const colors = [ '#F0CF65', '#97EFE9', '#83D3F8', '#D36135', '#001419', '#EFBDEB' ];

const Profiles = [{
        'title': 'is a UX/UI Developer',
        'brush': (context, coordinates) => sparkles(context, coordinates, colors[0])
    }, {
        'title': 'is a creative thinker',
        'brush': (context, coordinates) => creative(context, coordinates, [colors[2], colors[3], colors[4]])
    }, {
        'title': 'is empathetic and user-focussed',
        'brush': (context, coordinates) => collab(context, coordinates, [colors[2], colors[3], colors[3]])
    }, {
        'title': 'is high-fiving a million corgis',
        'brush': (context, coordinates) => pawprints(context, coordinates, colors[5])
    }
];

export default Profiles;
