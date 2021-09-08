import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({title, description}) => {
    
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `);
    
    return (
        <Helmet 
            htmlAttributes={{lang: `en`}}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            >
            <title>
                {title}
            </title>
            <meta 
                name='description' 
                content={description || data.site.siteMetadata.description} />
            <meta name='og:title' content={title} />
            <meta
                name='og:description'
                content={description || data.site.siteMetadata.description} />
            <meta name='og:type' content='website' />
        </Helmet>
    );
}

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

export default SEO;