'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">back-end-project2 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-fea139d390e2f7f063b813853b763b244688600436e331d0181a2ef1b7c837e64c642d04157c7c88c40362e201a0aa99cd6dddb36f9ab749ba33a2102a1b1a7e"' : 'data-bs-target="#xs-controllers-links-module-AppModule-fea139d390e2f7f063b813853b763b244688600436e331d0181a2ef1b7c837e64c642d04157c7c88c40362e201a0aa99cd6dddb36f9ab749ba33a2102a1b1a7e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-fea139d390e2f7f063b813853b763b244688600436e331d0181a2ef1b7c837e64c642d04157c7c88c40362e201a0aa99cd6dddb36f9ab749ba33a2102a1b1a7e"' :
                                            'id="xs-controllers-links-module-AppModule-fea139d390e2f7f063b813853b763b244688600436e331d0181a2ef1b7c837e64c642d04157c7c88c40362e201a0aa99cd6dddb36f9ab749ba33a2102a1b1a7e"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-fea139d390e2f7f063b813853b763b244688600436e331d0181a2ef1b7c837e64c642d04157c7c88c40362e201a0aa99cd6dddb36f9ab749ba33a2102a1b1a7e"' : 'data-bs-target="#xs-injectables-links-module-AppModule-fea139d390e2f7f063b813853b763b244688600436e331d0181a2ef1b7c837e64c642d04157c7c88c40362e201a0aa99cd6dddb36f9ab749ba33a2102a1b1a7e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-fea139d390e2f7f063b813853b763b244688600436e331d0181a2ef1b7c837e64c642d04157c7c88c40362e201a0aa99cd6dddb36f9ab749ba33a2102a1b1a7e"' :
                                        'id="xs-injectables-links-module-AppModule-fea139d390e2f7f063b813853b763b244688600436e331d0181a2ef1b7c837e64c642d04157c7c88c40362e201a0aa99cd6dddb36f9ab749ba33a2102a1b1a7e"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-081c058f1bdc426116b4828a3e5428a5b232557cd0f5da70e46ae69cc33c25510979ce6640b7fec3fd71bc92af990a3e3ca15677e3c8ecf743bc7c6ecd458970"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-081c058f1bdc426116b4828a3e5428a5b232557cd0f5da70e46ae69cc33c25510979ce6640b7fec3fd71bc92af990a3e3ca15677e3c8ecf743bc7c6ecd458970"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-081c058f1bdc426116b4828a3e5428a5b232557cd0f5da70e46ae69cc33c25510979ce6640b7fec3fd71bc92af990a3e3ca15677e3c8ecf743bc7c6ecd458970"' :
                                            'id="xs-controllers-links-module-AuthModule-081c058f1bdc426116b4828a3e5428a5b232557cd0f5da70e46ae69cc33c25510979ce6640b7fec3fd71bc92af990a3e3ca15677e3c8ecf743bc7c6ecd458970"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-081c058f1bdc426116b4828a3e5428a5b232557cd0f5da70e46ae69cc33c25510979ce6640b7fec3fd71bc92af990a3e3ca15677e3c8ecf743bc7c6ecd458970"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-081c058f1bdc426116b4828a3e5428a5b232557cd0f5da70e46ae69cc33c25510979ce6640b7fec3fd71bc92af990a3e3ca15677e3c8ecf743bc7c6ecd458970"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-081c058f1bdc426116b4828a3e5428a5b232557cd0f5da70e46ae69cc33c25510979ce6640b7fec3fd71bc92af990a3e3ca15677e3c8ecf743bc7c6ecd458970"' :
                                        'id="xs-injectables-links-module-AuthModule-081c058f1bdc426116b4828a3e5428a5b232557cd0f5da70e46ae69cc33c25510979ce6640b7fec3fd71bc92af990a3e3ca15677e3c8ecf743bc7c6ecd458970"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompaniesModule.html" data-type="entity-link" >CompaniesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CompaniesModule-5a861d9ab6724641e433436b3861f753283387c2994e965d9fe122e52213d6911b5ff46c5e0d257c11730b9e11f679107d6622754aee6bcb5b6db4e1783e5f67"' : 'data-bs-target="#xs-controllers-links-module-CompaniesModule-5a861d9ab6724641e433436b3861f753283387c2994e965d9fe122e52213d6911b5ff46c5e0d257c11730b9e11f679107d6622754aee6bcb5b6db4e1783e5f67"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CompaniesModule-5a861d9ab6724641e433436b3861f753283387c2994e965d9fe122e52213d6911b5ff46c5e0d257c11730b9e11f679107d6622754aee6bcb5b6db4e1783e5f67"' :
                                            'id="xs-controllers-links-module-CompaniesModule-5a861d9ab6724641e433436b3861f753283387c2994e965d9fe122e52213d6911b5ff46c5e0d257c11730b9e11f679107d6622754aee6bcb5b6db4e1783e5f67"' }>
                                            <li class="link">
                                                <a href="controllers/CompaniesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CompaniesModule-5a861d9ab6724641e433436b3861f753283387c2994e965d9fe122e52213d6911b5ff46c5e0d257c11730b9e11f679107d6622754aee6bcb5b6db4e1783e5f67"' : 'data-bs-target="#xs-injectables-links-module-CompaniesModule-5a861d9ab6724641e433436b3861f753283387c2994e965d9fe122e52213d6911b5ff46c5e0d257c11730b9e11f679107d6622754aee6bcb5b6db4e1783e5f67"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CompaniesModule-5a861d9ab6724641e433436b3861f753283387c2994e965d9fe122e52213d6911b5ff46c5e0d257c11730b9e11f679107d6622754aee6bcb5b6db4e1783e5f67"' :
                                        'id="xs-injectables-links-module-CompaniesModule-5a861d9ab6724641e433436b3861f753283387c2994e965d9fe122e52213d6911b5ff46c5e0d257c11730b9e11f679107d6622754aee6bcb5b6db4e1783e5f67"' }>
                                        <li class="link">
                                            <a href="injectables/CompaniesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabasesModule.html" data-type="entity-link" >DatabasesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DatabasesModule-b8d1b307e67a543d3e4f851266f5d5aa0900388e617e6d9e8c91485bfacbb2d65644946e10195025925b9a1ff430d4d6dedf950a1b4a30d0820fbb8ea43c244d"' : 'data-bs-target="#xs-controllers-links-module-DatabasesModule-b8d1b307e67a543d3e4f851266f5d5aa0900388e617e6d9e8c91485bfacbb2d65644946e10195025925b9a1ff430d4d6dedf950a1b4a30d0820fbb8ea43c244d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DatabasesModule-b8d1b307e67a543d3e4f851266f5d5aa0900388e617e6d9e8c91485bfacbb2d65644946e10195025925b9a1ff430d4d6dedf950a1b4a30d0820fbb8ea43c244d"' :
                                            'id="xs-controllers-links-module-DatabasesModule-b8d1b307e67a543d3e4f851266f5d5aa0900388e617e6d9e8c91485bfacbb2d65644946e10195025925b9a1ff430d4d6dedf950a1b4a30d0820fbb8ea43c244d"' }>
                                            <li class="link">
                                                <a href="controllers/DatabasesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatabasesModule-b8d1b307e67a543d3e4f851266f5d5aa0900388e617e6d9e8c91485bfacbb2d65644946e10195025925b9a1ff430d4d6dedf950a1b4a30d0820fbb8ea43c244d"' : 'data-bs-target="#xs-injectables-links-module-DatabasesModule-b8d1b307e67a543d3e4f851266f5d5aa0900388e617e6d9e8c91485bfacbb2d65644946e10195025925b9a1ff430d4d6dedf950a1b4a30d0820fbb8ea43c244d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabasesModule-b8d1b307e67a543d3e4f851266f5d5aa0900388e617e6d9e8c91485bfacbb2d65644946e10195025925b9a1ff430d4d6dedf950a1b4a30d0820fbb8ea43c244d"' :
                                        'id="xs-injectables-links-module-DatabasesModule-b8d1b307e67a543d3e4f851266f5d5aa0900388e617e6d9e8c91485bfacbb2d65644946e10195025925b9a1ff430d4d6dedf950a1b4a30d0820fbb8ea43c244d"' }>
                                        <li class="link">
                                            <a href="injectables/DatabasesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilesModule.html" data-type="entity-link" >FilesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FilesModule-072a4b99ae6ff3f00abf85c7e43071be8dccbccf3a117d8c83d7157222ed165590400e530e46384602ac3e3d383d178704871ae67d300c0822df6b47c4ff5f89"' : 'data-bs-target="#xs-controllers-links-module-FilesModule-072a4b99ae6ff3f00abf85c7e43071be8dccbccf3a117d8c83d7157222ed165590400e530e46384602ac3e3d383d178704871ae67d300c0822df6b47c4ff5f89"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FilesModule-072a4b99ae6ff3f00abf85c7e43071be8dccbccf3a117d8c83d7157222ed165590400e530e46384602ac3e3d383d178704871ae67d300c0822df6b47c4ff5f89"' :
                                            'id="xs-controllers-links-module-FilesModule-072a4b99ae6ff3f00abf85c7e43071be8dccbccf3a117d8c83d7157222ed165590400e530e46384602ac3e3d383d178704871ae67d300c0822df6b47c4ff5f89"' }>
                                            <li class="link">
                                                <a href="controllers/FilesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FilesModule-072a4b99ae6ff3f00abf85c7e43071be8dccbccf3a117d8c83d7157222ed165590400e530e46384602ac3e3d383d178704871ae67d300c0822df6b47c4ff5f89"' : 'data-bs-target="#xs-injectables-links-module-FilesModule-072a4b99ae6ff3f00abf85c7e43071be8dccbccf3a117d8c83d7157222ed165590400e530e46384602ac3e3d383d178704871ae67d300c0822df6b47c4ff5f89"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilesModule-072a4b99ae6ff3f00abf85c7e43071be8dccbccf3a117d8c83d7157222ed165590400e530e46384602ac3e3d383d178704871ae67d300c0822df6b47c4ff5f89"' :
                                        'id="xs-injectables-links-module-FilesModule-072a4b99ae6ff3f00abf85c7e43071be8dccbccf3a117d8c83d7157222ed165590400e530e46384602ac3e3d383d178704871ae67d300c0822df6b47c4ff5f89"' }>
                                        <li class="link">
                                            <a href="injectables/FilesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HealthModule-c62dd427256bdf624556c6bb9a01b24664a73dad0767bb71722e98d1242c9ba5045206b9c008bd48cfdd7d048d5d7913d7843290eed03d73bbdb80ef2fc3e739"' : 'data-bs-target="#xs-controllers-links-module-HealthModule-c62dd427256bdf624556c6bb9a01b24664a73dad0767bb71722e98d1242c9ba5045206b9c008bd48cfdd7d048d5d7913d7843290eed03d73bbdb80ef2fc3e739"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-c62dd427256bdf624556c6bb9a01b24664a73dad0767bb71722e98d1242c9ba5045206b9c008bd48cfdd7d048d5d7913d7843290eed03d73bbdb80ef2fc3e739"' :
                                            'id="xs-controllers-links-module-HealthModule-c62dd427256bdf624556c6bb9a01b24664a73dad0767bb71722e98d1242c9ba5045206b9c008bd48cfdd7d048d5d7913d7843290eed03d73bbdb80ef2fc3e739"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JobsModule.html" data-type="entity-link" >JobsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-JobsModule-dcac0787ff1f51bf3b0ddffca702f532b48ccd6aab8aafb5bf91f5e34a6890fd72a55f1056cc0db25d37d55443d08fc92c30a766d20c4d1068320286f2ccb38b"' : 'data-bs-target="#xs-controllers-links-module-JobsModule-dcac0787ff1f51bf3b0ddffca702f532b48ccd6aab8aafb5bf91f5e34a6890fd72a55f1056cc0db25d37d55443d08fc92c30a766d20c4d1068320286f2ccb38b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-JobsModule-dcac0787ff1f51bf3b0ddffca702f532b48ccd6aab8aafb5bf91f5e34a6890fd72a55f1056cc0db25d37d55443d08fc92c30a766d20c4d1068320286f2ccb38b"' :
                                            'id="xs-controllers-links-module-JobsModule-dcac0787ff1f51bf3b0ddffca702f532b48ccd6aab8aafb5bf91f5e34a6890fd72a55f1056cc0db25d37d55443d08fc92c30a766d20c4d1068320286f2ccb38b"' }>
                                            <li class="link">
                                                <a href="controllers/JobsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-JobsModule-dcac0787ff1f51bf3b0ddffca702f532b48ccd6aab8aafb5bf91f5e34a6890fd72a55f1056cc0db25d37d55443d08fc92c30a766d20c4d1068320286f2ccb38b"' : 'data-bs-target="#xs-injectables-links-module-JobsModule-dcac0787ff1f51bf3b0ddffca702f532b48ccd6aab8aafb5bf91f5e34a6890fd72a55f1056cc0db25d37d55443d08fc92c30a766d20c4d1068320286f2ccb38b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JobsModule-dcac0787ff1f51bf3b0ddffca702f532b48ccd6aab8aafb5bf91f5e34a6890fd72a55f1056cc0db25d37d55443d08fc92c30a766d20c4d1068320286f2ccb38b"' :
                                        'id="xs-injectables-links-module-JobsModule-dcac0787ff1f51bf3b0ddffca702f532b48ccd6aab8aafb5bf91f5e34a6890fd72a55f1056cc0db25d37d55443d08fc92c30a766d20c4d1068320286f2ccb38b"' }>
                                        <li class="link">
                                            <a href="injectables/JobsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailModule.html" data-type="entity-link" >MailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MailModule-4831d9a752a18cc7ca2bafbc8af3c6876bb912636d9a5e1051f2c7fe0340a73eba3274b55e4b41475672454bd5b99a32eea05ecc9250e51faf636650ac377df7"' : 'data-bs-target="#xs-controllers-links-module-MailModule-4831d9a752a18cc7ca2bafbc8af3c6876bb912636d9a5e1051f2c7fe0340a73eba3274b55e4b41475672454bd5b99a32eea05ecc9250e51faf636650ac377df7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MailModule-4831d9a752a18cc7ca2bafbc8af3c6876bb912636d9a5e1051f2c7fe0340a73eba3274b55e4b41475672454bd5b99a32eea05ecc9250e51faf636650ac377df7"' :
                                            'id="xs-controllers-links-module-MailModule-4831d9a752a18cc7ca2bafbc8af3c6876bb912636d9a5e1051f2c7fe0340a73eba3274b55e4b41475672454bd5b99a32eea05ecc9250e51faf636650ac377df7"' }>
                                            <li class="link">
                                                <a href="controllers/MailController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MailModule-4831d9a752a18cc7ca2bafbc8af3c6876bb912636d9a5e1051f2c7fe0340a73eba3274b55e4b41475672454bd5b99a32eea05ecc9250e51faf636650ac377df7"' : 'data-bs-target="#xs-injectables-links-module-MailModule-4831d9a752a18cc7ca2bafbc8af3c6876bb912636d9a5e1051f2c7fe0340a73eba3274b55e4b41475672454bd5b99a32eea05ecc9250e51faf636650ac377df7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailModule-4831d9a752a18cc7ca2bafbc8af3c6876bb912636d9a5e1051f2c7fe0340a73eba3274b55e4b41475672454bd5b99a32eea05ecc9250e51faf636650ac377df7"' :
                                        'id="xs-injectables-links-module-MailModule-4831d9a752a18cc7ca2bafbc8af3c6876bb912636d9a5e1051f2c7fe0340a73eba3274b55e4b41475672454bd5b99a32eea05ecc9250e51faf636650ac377df7"' }>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PermissionsModule.html" data-type="entity-link" >PermissionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PermissionsModule-5c5fccb9ae4fd9d5347dedaa56975cb8d7422acdb0875c15daf2d6c60a6e9eb605ed8d801735b9721b86d1fff4a7985856406b454f70758fb62bbc36635f20a4"' : 'data-bs-target="#xs-controllers-links-module-PermissionsModule-5c5fccb9ae4fd9d5347dedaa56975cb8d7422acdb0875c15daf2d6c60a6e9eb605ed8d801735b9721b86d1fff4a7985856406b454f70758fb62bbc36635f20a4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PermissionsModule-5c5fccb9ae4fd9d5347dedaa56975cb8d7422acdb0875c15daf2d6c60a6e9eb605ed8d801735b9721b86d1fff4a7985856406b454f70758fb62bbc36635f20a4"' :
                                            'id="xs-controllers-links-module-PermissionsModule-5c5fccb9ae4fd9d5347dedaa56975cb8d7422acdb0875c15daf2d6c60a6e9eb605ed8d801735b9721b86d1fff4a7985856406b454f70758fb62bbc36635f20a4"' }>
                                            <li class="link">
                                                <a href="controllers/PermissionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PermissionsModule-5c5fccb9ae4fd9d5347dedaa56975cb8d7422acdb0875c15daf2d6c60a6e9eb605ed8d801735b9721b86d1fff4a7985856406b454f70758fb62bbc36635f20a4"' : 'data-bs-target="#xs-injectables-links-module-PermissionsModule-5c5fccb9ae4fd9d5347dedaa56975cb8d7422acdb0875c15daf2d6c60a6e9eb605ed8d801735b9721b86d1fff4a7985856406b454f70758fb62bbc36635f20a4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PermissionsModule-5c5fccb9ae4fd9d5347dedaa56975cb8d7422acdb0875c15daf2d6c60a6e9eb605ed8d801735b9721b86d1fff4a7985856406b454f70758fb62bbc36635f20a4"' :
                                        'id="xs-injectables-links-module-PermissionsModule-5c5fccb9ae4fd9d5347dedaa56975cb8d7422acdb0875c15daf2d6c60a6e9eb605ed8d801735b9721b86d1fff4a7985856406b454f70758fb62bbc36635f20a4"' }>
                                        <li class="link">
                                            <a href="injectables/PermissionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResumesModule.html" data-type="entity-link" >ResumesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ResumesModule-1fa153eb8c372039cfe544b4ce58378871e52dac49f84efe3324f0a7a80f59f570bc53657dbac9a514b1ccb1b440f0df685fac8915052295e0bddfb30fa99e97"' : 'data-bs-target="#xs-controllers-links-module-ResumesModule-1fa153eb8c372039cfe544b4ce58378871e52dac49f84efe3324f0a7a80f59f570bc53657dbac9a514b1ccb1b440f0df685fac8915052295e0bddfb30fa99e97"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ResumesModule-1fa153eb8c372039cfe544b4ce58378871e52dac49f84efe3324f0a7a80f59f570bc53657dbac9a514b1ccb1b440f0df685fac8915052295e0bddfb30fa99e97"' :
                                            'id="xs-controllers-links-module-ResumesModule-1fa153eb8c372039cfe544b4ce58378871e52dac49f84efe3324f0a7a80f59f570bc53657dbac9a514b1ccb1b440f0df685fac8915052295e0bddfb30fa99e97"' }>
                                            <li class="link">
                                                <a href="controllers/ResumesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ResumesModule-1fa153eb8c372039cfe544b4ce58378871e52dac49f84efe3324f0a7a80f59f570bc53657dbac9a514b1ccb1b440f0df685fac8915052295e0bddfb30fa99e97"' : 'data-bs-target="#xs-injectables-links-module-ResumesModule-1fa153eb8c372039cfe544b4ce58378871e52dac49f84efe3324f0a7a80f59f570bc53657dbac9a514b1ccb1b440f0df685fac8915052295e0bddfb30fa99e97"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ResumesModule-1fa153eb8c372039cfe544b4ce58378871e52dac49f84efe3324f0a7a80f59f570bc53657dbac9a514b1ccb1b440f0df685fac8915052295e0bddfb30fa99e97"' :
                                        'id="xs-injectables-links-module-ResumesModule-1fa153eb8c372039cfe544b4ce58378871e52dac49f84efe3324f0a7a80f59f570bc53657dbac9a514b1ccb1b440f0df685fac8915052295e0bddfb30fa99e97"' }>
                                        <li class="link">
                                            <a href="injectables/ResumesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RolesModule-a59aedebac95cde2be3c6f31ee2975bc5a91bfe310fd25382ed39cc1c6d28e3add44103ee10379f95697ea5eae7551fce6176e051e76342be948864197551f66"' : 'data-bs-target="#xs-controllers-links-module-RolesModule-a59aedebac95cde2be3c6f31ee2975bc5a91bfe310fd25382ed39cc1c6d28e3add44103ee10379f95697ea5eae7551fce6176e051e76342be948864197551f66"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RolesModule-a59aedebac95cde2be3c6f31ee2975bc5a91bfe310fd25382ed39cc1c6d28e3add44103ee10379f95697ea5eae7551fce6176e051e76342be948864197551f66"' :
                                            'id="xs-controllers-links-module-RolesModule-a59aedebac95cde2be3c6f31ee2975bc5a91bfe310fd25382ed39cc1c6d28e3add44103ee10379f95697ea5eae7551fce6176e051e76342be948864197551f66"' }>
                                            <li class="link">
                                                <a href="controllers/RolesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RolesModule-a59aedebac95cde2be3c6f31ee2975bc5a91bfe310fd25382ed39cc1c6d28e3add44103ee10379f95697ea5eae7551fce6176e051e76342be948864197551f66"' : 'data-bs-target="#xs-injectables-links-module-RolesModule-a59aedebac95cde2be3c6f31ee2975bc5a91bfe310fd25382ed39cc1c6d28e3add44103ee10379f95697ea5eae7551fce6176e051e76342be948864197551f66"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RolesModule-a59aedebac95cde2be3c6f31ee2975bc5a91bfe310fd25382ed39cc1c6d28e3add44103ee10379f95697ea5eae7551fce6176e051e76342be948864197551f66"' :
                                        'id="xs-injectables-links-module-RolesModule-a59aedebac95cde2be3c6f31ee2975bc5a91bfe310fd25382ed39cc1c6d28e3add44103ee10379f95697ea5eae7551fce6176e051e76342be948864197551f66"' }>
                                        <li class="link">
                                            <a href="injectables/RolesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubscribersModule.html" data-type="entity-link" >SubscribersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SubscribersModule-3007cc11e502fff33f6de5f95d96714dd2fdc1f566cbff8c49e53f7b8326f67c4759a18044cf832130d37a2bf43df230fd6470b3138ef9f072efc197e7d984c0"' : 'data-bs-target="#xs-controllers-links-module-SubscribersModule-3007cc11e502fff33f6de5f95d96714dd2fdc1f566cbff8c49e53f7b8326f67c4759a18044cf832130d37a2bf43df230fd6470b3138ef9f072efc197e7d984c0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SubscribersModule-3007cc11e502fff33f6de5f95d96714dd2fdc1f566cbff8c49e53f7b8326f67c4759a18044cf832130d37a2bf43df230fd6470b3138ef9f072efc197e7d984c0"' :
                                            'id="xs-controllers-links-module-SubscribersModule-3007cc11e502fff33f6de5f95d96714dd2fdc1f566cbff8c49e53f7b8326f67c4759a18044cf832130d37a2bf43df230fd6470b3138ef9f072efc197e7d984c0"' }>
                                            <li class="link">
                                                <a href="controllers/SubscribersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SubscribersModule-3007cc11e502fff33f6de5f95d96714dd2fdc1f566cbff8c49e53f7b8326f67c4759a18044cf832130d37a2bf43df230fd6470b3138ef9f072efc197e7d984c0"' : 'data-bs-target="#xs-injectables-links-module-SubscribersModule-3007cc11e502fff33f6de5f95d96714dd2fdc1f566cbff8c49e53f7b8326f67c4759a18044cf832130d37a2bf43df230fd6470b3138ef9f072efc197e7d984c0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SubscribersModule-3007cc11e502fff33f6de5f95d96714dd2fdc1f566cbff8c49e53f7b8326f67c4759a18044cf832130d37a2bf43df230fd6470b3138ef9f072efc197e7d984c0"' :
                                        'id="xs-injectables-links-module-SubscribersModule-3007cc11e502fff33f6de5f95d96714dd2fdc1f566cbff8c49e53f7b8326f67c4759a18044cf832130d37a2bf43df230fd6470b3138ef9f072efc197e7d984c0"' }>
                                        <li class="link">
                                            <a href="injectables/SubscribersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-d6c2c313dbda0d25ca2820b6566720396de662beb1a721cfb9c7c8267304ae622fbc8e0354ceb09bb40c108477991da25a85b124ea7213e7cb4877f4b5139cee"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-d6c2c313dbda0d25ca2820b6566720396de662beb1a721cfb9c7c8267304ae622fbc8e0354ceb09bb40c108477991da25a85b124ea7213e7cb4877f4b5139cee"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-d6c2c313dbda0d25ca2820b6566720396de662beb1a721cfb9c7c8267304ae622fbc8e0354ceb09bb40c108477991da25a85b124ea7213e7cb4877f4b5139cee"' :
                                            'id="xs-controllers-links-module-UsersModule-d6c2c313dbda0d25ca2820b6566720396de662beb1a721cfb9c7c8267304ae622fbc8e0354ceb09bb40c108477991da25a85b124ea7213e7cb4877f4b5139cee"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-d6c2c313dbda0d25ca2820b6566720396de662beb1a721cfb9c7c8267304ae622fbc8e0354ceb09bb40c108477991da25a85b124ea7213e7cb4877f4b5139cee"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-d6c2c313dbda0d25ca2820b6566720396de662beb1a721cfb9c7c8267304ae622fbc8e0354ceb09bb40c108477991da25a85b124ea7213e7cb4877f4b5139cee"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-d6c2c313dbda0d25ca2820b6566720396de662beb1a721cfb9c7c8267304ae622fbc8e0354ceb09bb40c108477991da25a85b124ea7213e7cb4877f4b5139cee"' :
                                        'id="xs-injectables-links-module-UsersModule-d6c2c313dbda0d25ca2820b6566720396de662beb1a721cfb9c7c8267304ae622fbc8e0354ceb09bb40c108477991da25a85b124ea7213e7cb4877f4b5139cee"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CompaniesController.html" data-type="entity-link" >CompaniesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DatabasesController.html" data-type="entity-link" >DatabasesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FilesController.html" data-type="entity-link" >FilesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController.html" data-type="entity-link" >HealthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/JobsController.html" data-type="entity-link" >JobsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MailController.html" data-type="entity-link" >MailController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PermissionsController.html" data-type="entity-link" >PermissionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ResumesController.html" data-type="entity-link" >ResumesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RolesController.html" data-type="entity-link" >RolesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SubscribersController.html" data-type="entity-link" >SubscribersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Company.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company-1.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company-2.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company-3.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company-4.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCompanyDto.html" data-type="entity-link" >CreateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFileDto.html" data-type="entity-link" >CreateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateJobDto.html" data-type="entity-link" >CreateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePermissionDto.html" data-type="entity-link" >CreatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateResumeDto.html" data-type="entity-link" >CreateResumeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleDto.html" data-type="entity-link" >CreateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSubscriberDto.html" data-type="entity-link" >CreateSubscriberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/File.html" data-type="entity-link" >File</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Job.html" data-type="entity-link" >Job</a>
                            </li>
                            <li class="link">
                                <a href="classes/Permission.html" data-type="entity-link" >Permission</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterUserDto.html" data-type="entity-link" >RegisterUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Resume.html" data-type="entity-link" >Resume</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/Subscriber.html" data-type="entity-link" >Subscriber</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCompanyDto.html" data-type="entity-link" >UpdateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFileDto.html" data-type="entity-link" >UpdateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateJobDto.html" data-type="entity-link" >UpdateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissionDto.html" data-type="entity-link" >UpdatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateResumeDto.html" data-type="entity-link" >UpdateResumeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRoleDto.html" data-type="entity-link" >UpdateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSubscriberDto.html" data-type="entity-link" >UpdateSubscriberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLoginDto.html" data-type="entity-link" >UserLoginDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CompaniesService.html" data-type="entity-link" >CompaniesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabasesService.html" data-type="entity-link" >DatabasesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilesService.html" data-type="entity-link" >FilesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JobsService.html" data-type="entity-link" >JobsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MailService.html" data-type="entity-link" >MailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MulterConfigService.html" data-type="entity-link" >MulterConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionsService.html" data-type="entity-link" >PermissionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResumesService.html" data-type="entity-link" >ResumesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesService.html" data-type="entity-link" >RolesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubscribersService.html" data-type="entity-link" >SubscribersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});