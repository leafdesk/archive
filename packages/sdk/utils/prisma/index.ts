import { PrismaClient } from '@prisma/client'

/**
 * 전역 객체에 존재하는 prisma 프로퍼티를 사용 (개발 환경에만 적용).
 * 정의되어 있지 않다면, 새로운 PrismaClient 인스턴스 생성.
 */
const prisma = globalThis.prisma || new PrismaClient()

/**
 * 개발 환경에서만, 전역 객체의 prisma 프로퍼티를 현재 생성된 인스턴스로 설정.
 * 개발 중에만 싱글톤 패턴을 사용하여 동일한 인스턴스 재사용.
 */
if (process.env.NODE_ENV === 'development') {
  globalThis.prisma = prisma
}

/**
 * <개발 환경> 개발 중에 DB 연결이 매 요청마다 새로 생성되는 것을 방지.
 * 싱글톤 패턴 사용으로 인한 잠재적 문제점이 있으나, 자원 사용 최적화 및 빠른 반복 개발 지원.
 * <운영 환경> 개별 요청 또는 인스턴스마다 별도의 DB 연결을 유지.
 * 안정성을 높이고, 예상치 못한 상호 작용을 방지. 안정성, 성능, 보안을 고려.
 */
export default prisma
