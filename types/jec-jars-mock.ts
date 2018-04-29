/*!
 * JEC JARS-MOCK Node Module
 * Copyright(c) 2017-2018 Pascal ECHEMANN
 * Apache 2.0 Licensed
 * This is a part of the JEC projects: <http://jecproject.org>
 */

declare module "jec-jars-mock" {

import { HttpMethodParams, RoutePathParams, RootPathVersion } from "jec-jars";
import { Singleton, Decorator, AbstractDecoratorConnector } from "jec-commons";

export class JarsMock implements Singleton {
    constructor();
    private static INSTANCE;
    private static _locked;
    static getInstance(): JarsMock;
    private _id;
    private _contextManager;
    private initObj();
    createContext(): void;
    deleteContext(): void;
    getId(): string;
}
export class JarsMockConnector extends AbstractDecoratorConnector {
    constructor(jcadReference: string, decorator: Decorator);
}
export class CONNECTDecorator implements Decorator {
    constructor();
    decorate(target: any, key: string, descriptor: PropertyDescriptor, params?: HttpMethodParams): any;
}
export class CookieParamDecorator implements Decorator {
    constructor();
    decorate(target: any, propertyKey: string | symbol, parameterIndex: number): any;
}
export class DELETEDecorator implements Decorator {
    constructor();
    decorate(target: any, key: string, descriptor: PropertyDescriptor, params?: HttpMethodParams): any;
}
export class DestroyDecorator implements Decorator {
    constructor();
    decorate(target: any, key: string, descriptor: PropertyDescriptor): any;
}
export class ExitDecorator implements Decorator {
    constructor();
    decorate(target: any, propertyKey: string | symbol, parameterIndex: number): any;
}
export class GETDecorator implements Decorator {
    constructor();
    decorate(target: any, key: string, descriptor: PropertyDescriptor, params?: HttpMethodParams): any;
}
export class HEADDecorator implements Decorator {
    constructor();
    decorate(target: any, key: string, descriptor: PropertyDescriptor, params?: HttpMethodParams): any;
}
export class InitDecorator implements Decorator {
    constructor();
    decorate(target: any, key: string, descriptor: PropertyDescriptor): any;
}
export class OPTIONSDecorator implements Decorator {
    constructor();
    decorate(target: any, key: string, descriptor: PropertyDescriptor, params?: HttpMethodParams): any;
}
export class PathParamDecorator implements Decorator {
    constructor();
    decorate(target: any, propertyKey: string | symbol, parameterIndex: number): any;
}
export class POSTDecorator implements Decorator {
    constructor();
    decorate(target: any, key: string, descriptor: PropertyDescriptor, params?: HttpMethodParams): any;
}
export class PUTDecorator implements Decorator {
    constructor();
    decorate(target: any, key: string, descriptor: PropertyDescriptor, params?: HttpMethodParams): any;
}
export class QueryParamDecorator implements Decorator {
    constructor();
    decorate(target: any, propertyKey: string | symbol, parameterIndex: number): any;
}
export class RequestBodyDecorator implements Decorator {
    constructor();
    decorate(target: any, propertyKey: string | symbol, parameterIndex: number): any;
}
export class RequestParamDecorator implements Decorator {
    constructor();
    decorate(target: any, propertyKey: string | symbol, parameterIndex: number): any;
}
export class ResourcePathDecorator implements Decorator {
    constructor();
    decorate(target: any, params: any): any;
}
export class RootPathDecorator implements Decorator {
    constructor();
    decorate(target: any, params: RoutePathParams): any;
}
export class RootPathRefsDecorator implements Decorator {
    constructor();
    decorate(target: any, pathRefs: string[]): any;
}
export class TRACEDecorator implements Decorator {
    constructor();
    decorate(target: any, key: string, descriptor: PropertyDescriptor, params?: HttpMethodParams): any;
}
export class JarsMockContextManager {
    constructor();
    private _jcadContext;
    private initContext(jcadReference, decoratorClass);
    private removeContext(jcadReference);
    createContext(): void;
    deleteContext(): void;
}
}