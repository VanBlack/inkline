import ClassesProviderMixin from 'inkline/mixins/components/providers/ClassesProviderMixin';

import SizePropertyMixin from 'inkline/mixins/components/properties/SizePropertyMixin';

export default {
    name: 'INavbarItems',
    mixins: [
        ClassesProviderMixin,

        SizePropertyMixin,
    ],
    props: {
        tabs: {
            type: Boolean,
            default: false
        },
        vertical: {
            type: Boolean,
            default: false
        }
    },
    created () {
        this.classesProvider.add(() => ({
            '-tabs': this.tabs,
            '-vertical': this.vertical
        }));
    }
};