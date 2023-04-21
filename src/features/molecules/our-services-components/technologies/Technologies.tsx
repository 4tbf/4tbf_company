import React from 'react';
import styles from './Technologies.module.scss';
import Text from '../../../atoms/text';
import ReactIcon from '../../../../components/svgs/ReactIcon';
import VueIcon from '../../../../components/svgs/VueIcon';
import JsIcon from '../../../../components/svgs/JsIcon';
import ThreeIcon from '../../../../components/svgs/ThreeIcon';
import NextJsIcon from '../../../../components/svgs/NextJsIcon';
import NodeJsIcon from '../../../../components/svgs/NodeJsIcon';
import Python from '../../../../components/svgs/Python';
import ExpressJs from '../../../../components/svgs/ExpressJs';
import SolidityIcon from '../../../../components/svgs/SolidityIcon';
import PhpIcon from '../../../../components/svgs/PhpIcon';
import Mongo from '../../../../components/svgs/Mongo';
import MySql from '../../../../components/svgs/MySql';
import Postgre from '../../../../components/svgs/Postgre';
import Oracle from '../../../../components/svgs/Oracle';
import AwsIcon from '../../../../components/svgs/AwsIcon';
import RdsIcon from '../../../../components/svgs/RdsIcon';
import Docker from '../../../../components/svgs/Docker';
import Kubernetes from '../../../../components/svgs/Kubernetes';
import Jenkins from '../../../../components/svgs/Jenkins';
import GihubActionsIcon from '../../../../components/svgs/GihubActionsIcon';
import GrafanaIcon from '../../../../components/svgs/GrafanaIcon';
import SeleniumIcon from '../../../../components/svgs/SeleniumIcon';
import BrowserStackIcon from '../../../../components/svgs/BrowserStackIcon';
import PostmanIcon from '../../../../components/svgs/PostmanIcon';
import AppiumIcon from '../../../../components/svgs/AppiumIcon';
import ContentfulIcon from '../../../../components/svgs/ContentfulIcon';
import PrismicIcon from '../../../../components/svgs/PrismicIcon';
import StrapiIcon from '../../../../components/svgs/StrapiIcon';
import SketchIcon from '../../../../components/svgs/SketchIcon';
import FigmaIcon from '../../../../components/svgs/FigmaIcon';
import XdIcon from '../../../../components/svgs/XdIcon';
import ZeplinIcon from '../../../../components/svgs/ZeplinIcon';
import JiraIcon from '../../../../components/svgs/JiraIcon';
import AsanaIcon from '../../../../components/svgs/AsanaIcon';
import TrelloIcon from '../../../../components/svgs/TrelloIcon';
import NotionIcon from '../../../../components/svgs/NotionIcon';
import MiroIcon from '../../../../components/svgs/MiroIcon';

const Technologies = () => {
  return (
    <section className={styles.technologies}>
      <div className="container">
        <Text as="h2">TECHNOLOGIES WE USE</Text>
        <div className={styles.technologiesWrapper}>
          <div className={styles.technologiesList}>
            <div className={styles.listItem}>
              <Text as="h3">front end technologies</Text>
              <div className={styles.technologiesItems}>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <ReactIcon /> React JS
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <VueIcon /> Vue JS
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <ReactIcon /> React Native
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <JsIcon /> JavaScript
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <ThreeIcon /> Three JS
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <NextJsIcon /> Next JS
                  </Text>
                </div>
              </div>
            </div>
            <div className={styles.listItem}>
              <Text as="h3">back end technologies</Text>
              <div className={styles.technologiesItems}>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <NodeJsIcon /> Node JS
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <Python /> Python
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <ExpressJs /> Express JS
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <SolidityIcon />
                    Solidity
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <PhpIcon />
                    PHP
                  </Text>
                </div>
              </div>
            </div>
            <div className={styles.listItem}>
              <Text as="h3">Databases</Text>
              <div className={styles.technologiesItems}>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <Mongo /> MongoDB
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <MySql /> My SQL
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <Postgre /> PostgreSQL
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <Oracle /> PostgreSQL
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <AwsIcon /> Amazon
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <RdsIcon /> RDS
                  </Text>
                </div>
              </div>
            </div>
            <div className={styles.listItem}>
              <Text as="h3">devops technologies</Text>
              <div className={styles.technologiesItems}>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <Docker /> Docker
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <Kubernetes /> Kubernetes
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <Jenkins /> Jenkins
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <GihubActionsIcon /> Github Actions
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <AwsIcon />
                    AWS
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <GrafanaIcon />
                    Grafana
                  </Text>
                </div>
              </div>
            </div>
            <div className={styles.listItem}>
              <Text as="h3">Testing</Text>
              <div className={styles.technologiesItems}>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <SeleniumIcon />
                    Selenium
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <BrowserStackIcon />
                    BrowserStack
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <PostmanIcon />
                    Postman
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <AppiumIcon />
                    Appium
                  </Text>
                </div>
              </div>
            </div>
            <div className={styles.listItem}>
              <Text as="h3">Content handling tools</Text>
              <div className={styles.technologiesItems}>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <ContentfulIcon />
                    Contentful
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <PrismicIcon />
                    Prismic
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <StrapiIcon />
                    Strapi
                  </Text>
                </div>
              </div>
            </div>
            <div className={styles.listItem}>
              <Text as="h3">ux/ui Design</Text>
              <div className={styles.technologiesItems}>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <SketchIcon />
                    Sketch
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <FigmaIcon />
                    Figma
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <XdIcon />
                    Adobe XD
                  </Text>
                </div>

                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <ZeplinIcon />
                    Zeplin
                  </Text>
                </div>
              </div>
            </div>
            <div className={styles.listItem}>
              <Text as="h3">project management</Text>
              <div className={styles.technologiesItems}>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <JiraIcon /> Jira
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <AsanaIcon /> Asana
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <TrelloIcon /> Trello
                  </Text>
                </div>
              </div>
            </div>
            <div className={styles.listItem}>
              <Text as="h3">documentation & project roadmaps</Text>
              <div className={styles.technologiesItems}>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <NotionIcon /> Notion
                  </Text>
                </div>
                <div className={styles.technologiesItem}>
                  <Text as="p">
                    <MiroIcon /> Miro
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
